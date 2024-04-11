import supabase from "./supabase";

export const HandleFetch = async function () {
  let { data, error } = await supabase.from("foodlist").select("*");

  if (error) {
    console.error(error);
    throw new Error("no data recovered");
  }
  return data;
};
