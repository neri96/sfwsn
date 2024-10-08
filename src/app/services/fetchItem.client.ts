import { createClient } from "../lib/superbase/client";

import fetchItem from "./fetchItem";

import { IFetchedItemResult } from "./ts/interfaces";

const fetchItemClient = async (slug: string): Promise<IFetchedItemResult> => {
  const response = await fetchItem(slug, createClient);

  return response;
};

export default fetchItemClient;
