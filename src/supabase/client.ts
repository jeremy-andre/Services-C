import { createClient, SupabaseClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL || "";
// const supabaseKey: string = process.env.SUPABASE_KEY || "";

const supabase: SupabaseClient = createClient(
  "https://meopmjbvbnymqiduzmdb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb3BtamJ2Ym55bXFpZHV6bWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MzgwMTQsImV4cCI6MjAwNDQxNDAxNH0.brHr1YSZNnViWbiKb4Cce1bkJnPC7CP7NmGjHfCA2bk"
);

export default supabase;
