import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qgtmxfvujbyudracvsim.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndG14ZnZ1amJ5dWRyYWN2c2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMzg2NzgsImV4cCI6MjA3NjcxNDY3OH0.aIfg0O3XcRDkf5UwNYI_ASwKUceWhssnfboTSsX1lCQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role (for API routes only)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndG14ZnZ1amJ5dWRyYWN2c2ltIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTEzODY3OCwiZXhwIjoyMDc2NzE0Njc4fQ.KIOawXoK3Qnabze9Z6iU3_9d0GLLg7P3KB7_qFRFdSo',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Types for our database tables
export interface AccessCode {
  id: string
  email: string
  access_code: string
  is_active: boolean
  created_at: string
  last_login: string | null
}

export interface Newsletter {
  id: string
  title: string
  quarter: string
  year: number
  content: string
  pdf_url: string | null
  published_date: string
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface LoginAttempt {
  id: string
  email: string
  success: boolean
  attempted_at: string
  ip_address: string | null
}

