/*
  # Contact Form Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `company_name` (text)
      - `service_type` (text)
      - `problem_description` (text)
      - `additional_info` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policies for authenticated admin users to read all submissions
    - Add policy for public to create submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  service_type text NOT NULL,
  problem_description text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);