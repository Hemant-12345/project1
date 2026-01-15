const supabaseClient = window.supabase.createClient(
  "https://duscmumrlnzwwbrxbhrh.supabase.co",
  "sb_publishable_x4jMioMZ4TaeLRLLTHcVCg_8VpBy94c"
);

if (supabaseClient) {
  console.log("Database Connected:", supabaseClient);
}
else {
  console.log("Database not connected");
}
