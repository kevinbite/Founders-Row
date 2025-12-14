# Update Newsletter Instructions - INSIDE THE ROW

## Available Volumes

- **VOL. 1**: `supabase_inside_the_row_vol1.sql`
- **VOL. 2**: `supabase_inside_the_row_vol2.sql` *(NEW)*

---

## Adding VOL. 2 (Latest)

### Step 1: Access Supabase SQL Editor

1. Go to [https://supabase.com](https://supabase.com) and log into your project
2. Navigate to the **SQL Editor** in the left sidebar
3. Click **New Query**

### Step 2: Run the SQL Update

1. Open the file: `supabase_inside_the_row_vol2.sql`
2. Copy the entire contents
3. Paste into Supabase SQL Editor
4. Click **Run** (or press Cmd/Ctrl + Enter)

**Note:** This will ADD Vol. 2 to your existing newsletters. Both Vol. 1 and Vol. 2 will be visible in the investor portal.

---

## Fresh Install (Both Volumes)

If setting up from scratch, run both SQL files in order:
1. First run `supabase_inside_the_row_vol1.sql`
2. Then run `supabase_inside_the_row_vol2.sql`

## Step 3: Verify the Update

After running the SQL, you should see:
- **1 row** inserted
- A result table showing all newsletters:
  - Title: "INSIDE THE ROW — VOL. 2" (newest)
  - Title: "INSIDE THE ROW — VOL. 1"
  - Is Published: true for all

## Step 4: Test on Investor Dashboard

1. Navigate to: **http://localhost:3000/investor-login**
2. Log in with your credentials (or test@foundersrow.com / DEMO2025)
3. You should see:
   - **Section header**: "INSIDE THE ROW"
   - **Newsletter cards**: Both VOL. 1 and VOL. 2 (newest first)
   - Click a card to open the full newsletter in a modal
   - Content should be beautifully formatted with:
     - Distinct sections with proper headings
     - Paragraph spacing
     - Bullet points where applicable
     - Section dividers between each part

## What Changed

### Database
- ✅ Removed all placeholder quarterly newsletters
- ✅ Added "INSIDE THE ROW — VOL. 1" with formatted content
- ✅ Proper section breaks (triple line breaks)

### UI/UX Updates
- ✅ Changed "Quarterly Newsletters" → "INSIDE THE ROW"
- ✅ Updated description to reflect exclusive insights format
- ✅ Removed quarter/year display on cards (now shows published date only)
- ✅ Added professional formatting with section headings
- ✅ Added visual dividers between sections
- ✅ Improved bullet point styling
- ✅ Optimized mobile and desktop reading experience

## Future Volumes

When adding VOL. 2, VOL. 3, etc.:
1. Keep the same format with triple line breaks (`\n\n\n`) between sections
2. Update the title to "INSIDE THE ROW — VOL. X"
3. Update the quarter field to "VOL. X"
4. The formatting will automatically apply

## Need Help?

If the newsletter doesn't display correctly:
1. Check browser console for errors
2. Verify the SQL ran successfully in Supabase
3. Confirm the newsletter has `is_published = true`
4. Clear your browser cache and reload

