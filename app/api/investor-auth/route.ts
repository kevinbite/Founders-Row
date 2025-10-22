import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, accessCode } = await request.json()

    // Validate input
    if (!email || !accessCode) {
      return NextResponse.json(
        { error: 'Email and access code are required' },
        { status: 400 }
      )
    }

    // Get client IP for logging
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check if email and access code match
    const { data: accessCodeData, error: accessCodeError } = await supabaseAdmin
      .from('access_codes')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .eq('access_code', accessCode.trim())
      .eq('is_active', true)
      .single()

    // Log the login attempt
    await supabaseAdmin.from('login_attempts').insert({
      email: email.toLowerCase().trim(),
      success: !!accessCodeData,
      ip_address: ip
    })

    if (accessCodeError || !accessCodeData) {
      return NextResponse.json(
        { error: 'Invalid email or access code' },
        { status: 401 }
      )
    }

    // Update last login time
    await supabaseAdmin
      .from('access_codes')
      .update({ last_login: new Date().toISOString() })
      .eq('id', accessCodeData.id)

    // Create a session token (simple JWT-like token)
    const sessionToken = Buffer.from(
      JSON.stringify({
        email: accessCodeData.email,
        id: accessCodeData.id,
        exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      })
    ).toString('base64')

    const response = NextResponse.json(
      { 
        success: true,
        message: 'Authentication successful'
      },
      { status: 200 }
    )

    // Set HTTP-only cookie for session
    response.cookies.set('investor_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 // 24 hours
    })

    return response

  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Verify session endpoint
export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('investor_session')?.value

    if (!sessionToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    // Decode and verify token
    const session = JSON.parse(Buffer.from(sessionToken, 'base64').toString())

    if (session.exp < Date.now()) {
      return NextResponse.json(
        { authenticated: false, error: 'Session expired' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { 
        authenticated: true,
        email: session.email
      },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  }
}

// Logout endpoint
export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('investor_session')
  return response
}

