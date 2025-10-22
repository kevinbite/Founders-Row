-- Test Data for Investor Portal
-- Run this in your Supabase SQL Editor to add test data

-- Add a test investor
INSERT INTO access_codes (email, access_code, is_active)
VALUES ('test@foundersrow.com', 'DEMO2025', true)
ON CONFLICT (email) DO NOTHING;

-- Add sample newsletters
INSERT INTO newsletters (title, quarter, year, content, is_published, published_date)
VALUES 
(
  'Q4 2024 Investor Update',
  'Q4',
  2024,
  E'Dear Investors,\n\nWe are pleased to share our Q4 2024 update with significant milestones across our portfolio.\n\nKey Highlights:\n\n• Portfolio Performance: Our portfolio companies achieved 45% aggregate revenue growth year-over-year\n• New Investments: Closed two strategic investments in the consumer brand space\n• Exits: Successfully exited one portfolio company at 3.2x MOIC\n• Platform Expansion: Launched Founders Row Media partnership\n\nLooking Ahead:\n\nQ1 2025 will focus on scaling our existing portfolio companies and evaluating new investment opportunities in the Atlanta market. We remain committed to our founder-first approach and building enduring companies.\n\nThank you for your continued partnership.\n\nBest regards,\nThe Founders Row Team',
  true,
  NOW() - INTERVAL '30 days'
),
(
  'Q3 2024 Quarterly Review',
  'Q3',
  2024,
  E'Dear Investors,\n\nQ3 2024 marked a period of strategic growth and operational excellence across our platform.\n\nPortfolio Updates:\n\n• Company A: Expanded to 5 new markets, achieving 60% revenue growth\n• Company B: Completed Series A fundraise at $50M valuation\n• Company C: Launched new product line with strong early traction\n\nAdvisory Highlights:\n\n• Onboarded 3 new advisory clients\n• Completed 2 successful capital raises for advisory portfolio\n• Expanded team with senior marketing and finance hires\n\nMarket Insights:\n\nWe continue to see strong opportunities in founder-led consumer brands, particularly in experiential retail and health & wellness categories.\n\nWarm regards,\nThe Founders Row Team',
  true,
  NOW() - INTERVAL '90 days'
),
(
  'Q2 2024 Mid-Year Update',
  'Q2',
  2024,
  E'Dear Investors,\n\nAs we reach the midpoint of 2024, we wanted to share our progress and outlook.\n\nFirst Half Performance:\n\n• Deployed $12M across 3 new investments\n• Portfolio companies collectively grew headcount by 35%\n• Completed 2 add-on acquisitions for existing portfolio companies\n• Advisory revenue up 80% year-over-year\n\nStrategic Initiatives:\n\n• Launched Founders Row Media in partnership with leading creative agency\n• Expanded our Atlanta presence with new office space\n• Built out investor relations and reporting infrastructure\n\nSecond Half Focus:\n\nWe are actively evaluating 5 new investment opportunities and expect to close 2-3 deals in Q3-Q4. Our focus remains on founder-led brands with proven product-market fit.\n\nThank you for your trust and partnership.\n\nSincerely,\nThe Founders Row Team',
  true,
  NOW() - INTERVAL '180 days'
)
ON CONFLICT (id) DO NOTHING;

-- Verify data was inserted
SELECT 'Access Codes:' as table_name, COUNT(*) as count FROM access_codes
UNION ALL
SELECT 'Newsletters:', COUNT(*) FROM newsletters WHERE is_published = true;

