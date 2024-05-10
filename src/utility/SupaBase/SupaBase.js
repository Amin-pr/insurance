import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ebfczmghfpocfhfmoeer.supabase.co";

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZmN6bWdoZnBvY2ZoZm1vZWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjg1MTEsImV4cCI6MjAzMDc0NDUxMX0.H3ImrbS7q6cdGMHpGnnWep9UdTemayRBq6r8sOURE1E";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
