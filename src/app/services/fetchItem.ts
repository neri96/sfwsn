import { SupabaseClient } from "@supabase/supabase-js";

import { IFetchedItemResult } from "./ts/interfaces";

const fetchItem = async (
  slug: string,
  createClient: () => SupabaseClient
): Promise<IFetchedItemResult> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("item")
    .select("*")
    .eq("slug", slug)
    .single();

  return { data, error };
};

export default fetchItem;
