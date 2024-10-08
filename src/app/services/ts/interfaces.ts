import { PostgrestError } from "@supabase/supabase-js";
import { ItemData, IManufacturerData } from "@/app/ts/interfaces";

export interface IFetchedItemResult {
  data: ItemData | null;
  error: PostgrestError | null;
}

export interface IFetchedManufacturerResult {
  data: IManufacturerData[] | null;
  error: PostgrestError | null;
}
