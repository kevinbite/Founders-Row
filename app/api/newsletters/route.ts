import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Verify session
    const sessionToken = request.cookies.get('investor_session')?.value

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Decode and verify token
    try {
      const session = JSON.parse(Buffer.from(sessionToken, 'base64').toString())

      if (session.exp < Date.now()) {
        return NextResponse.json(
          { error: 'Session expired' },
          { status: 401 }
        )
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      )
    }

    // Fetch published newsletters
    const { data: newsletters, error } = await supabase
      .from('newsletters')
      .select('*')
      .eq('is_published', true)
      .order('published_date', { ascending: false })

    if (error) {
      console.error('Error fetching newsletters:', error)
      return NextResponse.json(
        { error: 'Failed to fetch newsletters' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { newsletters: newsletters || [] },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

