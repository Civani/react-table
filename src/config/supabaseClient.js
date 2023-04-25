import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://ioqapqbymvyifajyrfnh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcWFwcWJ5bXZ5aWZhanlyZm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2Mzc4MDEsImV4cCI6MTk5NjIxMzgwMX0.uWIm6Vp1XUDInNmWvD9evh82TVq6jz7DhMaMoinS-rA"
);
