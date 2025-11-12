# Update Newsletter Instructions - INSIDE THE ROW VOL. 1

## Step 1: Access Supabase SQL Editor

1. Go to [https://supabase.com](https://supabase.com) and log into your project
2. Navigate to the **SQL Editor** in the left sidebar
3. Click **New Query**

## Step 2: Run the SQL Update

Copy and paste the following SQL from the file `supabase_inside_the_row_vol1.sql`:

```sql
-- Clear existing test newsletters and add INSIDE THE ROW VOL. 1
-- Run this in your Supabase SQL Editor

-- Delete all existing newsletters
DELETE FROM newsletters;

-- Insert INSIDE THE ROW VOL. 1
-- (See the full SQL file for the complete INSERT statement)
```

Or simply:
1. Open the file: `supabase_inside_the_row_vol1.sql`
2. Copy the entire contents
3. Paste into Supabase SQL Editor
4. Click **Run** (or press Cmd/Ctrl + Enter)

## Step 3: Verify the Update

After running the SQL, you should see:
- **1 row** deleted (or 3 rows if test data was present)
- **1 row** inserted
- A result table showing the new newsletter:
  - Title: "INSIDE THE ROW — VOL. 1"
  - Quarter: "VOL. 1"
  - Year: 2025
  - Is Published: true

## Step 4: Test on Investor Dashboard

1. Navigate to: **http://localhost:3000/investor-login**
2. Log in with your credentials (or test@foundersrow.com / DEMO2025)
3. You should see:
   - **Section header**: "INSIDE THE ROW" (not "Quarterly Newsletters")
   - **One newsletter card**: "INSIDE THE ROW — VOL. 1"
   - Click the card to open the full newsletter in a modal
   - Content should be beautifully formatted with:
     - 6 distinct sections
     - Proper headings for each section
     - Paragraph spacing
     - Bullet points for The Founders Row Focus section
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

