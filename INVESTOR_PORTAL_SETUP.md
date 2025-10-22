# Investor Portal Setup Guide

## Overview
The investor portal provides secure access to quarterly newsletters for authenticated investors using email + access code authentication.

## Database Tables Created
- `access_codes` - Stores investor emails and access codes
- `newsletters` - Stores quarterly newsletters
- `login_attempts` - Logs all login attempts for security

## Environment Variables

Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://qgtmxfvujbyudracvsim.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndG14ZnZ1amJ5dWRyYWN2c2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMzg2NzgsImV4cCI6MjA3NjcxNDY3OH0.aIfg0O3XcRDkf5UwNYI_ASwKUceWhssnfboTSsX1lCQ
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndG14ZnZ1amJ5dWRyYWN2c2ltIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTEzODY3OCwiZXhwIjoyMDc2NzE0Njc4fQ.KIOawXoK3Qnabze9Z6iU3_9d0GLLg7P3KB7_qFRFdSo
```

## Adding Investors

To add a new investor, run this SQL in your Supabase SQL Editor:

```sql
INSERT INTO access_codes (email, access_code, is_active)
VALUES ('investor@example.com', 'UNIQUE-ACCESS-CODE-HERE', true);
```

**Important:** Generate unique, secure access codes for each investor.

## Adding Newsletters

To add a new newsletter, run this SQL in your Supabase SQL Editor:

```sql
INSERT INTO newsletters (title, quarter, year, content, is_published, pdf_url)
VALUES (
  'Q1 2025 Newsletter',
  'Q1',
  2025,
  'Your newsletter content here...',
  true,
  'https://your-storage-url.com/newsletter.pdf' -- Optional
);
```

## Features

### Authentication
- Email + access code authentication
- Session management with HTTP-only cookies
- 24-hour session expiration
- Login attempt logging for security

### Investor Dashboard
- View all published newsletters
- Read full newsletter content in modal
- Download PDF versions (if available)
- Secure logout functionality

### Security
- Row Level Security (RLS) enabled on all tables
- Service role required for data management
- Session validation on protected routes
- Login attempt tracking

## Pages

- `/investor-login` - Login page with email + access code form
- `/investor-dashboard` - Protected dashboard showing newsletters

## API Routes

- `POST /api/investor-auth` - Authenticate investor
- `GET /api/investor-auth` - Verify session
- `DELETE /api/investor-auth` - Logout
- `GET /api/newsletters` - Fetch published newsletters

## Testing

1. Add a test investor:
```sql
INSERT INTO access_codes (email, access_code, is_active)
VALUES ('test@foundersrow.com', 'TEST123', true);
```

2. Add a test newsletter:
```sql
INSERT INTO newsletters (title, quarter, year, content, is_published)
VALUES (
  'Q4 2024 Update',
  'Q4',
  2024,
  'This is a test newsletter with important updates for our investors.',
  true
);
```

3. Visit `/investor-login` and login with:
   - Email: test@foundersrow.com
   - Access Code: TEST123

4. You should be redirected to `/investor-dashboard` with the test newsletter visible.

## Deployment Notes

- Environment variables are already configured in the code with fallbacks
- For production, ensure `.env.local` is NOT committed to git (already in .gitignore)
- Vercel will need the environment variables added in the project settings
- Consider implementing rate limiting for login attempts in production

