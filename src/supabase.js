import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jxdwpdjqsihkajbnlupr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZHdwZGpxc2loa2FqYm5sdXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NTM1NDEsImV4cCI6MjAyODIyOTU0MX0.YctV8yEQNTYlo1bbCgXmc3_W0gDg3EkJ9jYMGKS3RxI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
