import { createClient } from "../lib/superbase/server";

import { IFetchedManufacturerResult } from "./ts/interfaces";
import { ItemType } from "../ts/types";

const fetchManufacturers = async (
  slug: ItemType
): Promise<IFetchedManufacturerResult> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("manufacturer")
    .select("*")
    .eq("slug", slug);

  return { data, error };
};

export default fetchManufacturers;
