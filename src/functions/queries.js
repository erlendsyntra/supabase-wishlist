export const getWishes = async (supabase) => {
  const { data } = await supabase
    .from("wishlist")
    .select()
    .order("created_at", { ascending: false });
  return data;
};

export const insertWish = async (supabase, wish, user_id) => {
  await supabase.from("wishlist").insert({ wish, user_id });
};

export const updateWish = async (supabase, id, bought) => {
  await supabase.from("wishlist").update({ bought }).eq("id", id);
};

export const deleteWish = async (supabase, id) => {
  await supabase.from("wishlist").delete().eq("id", id);
};
