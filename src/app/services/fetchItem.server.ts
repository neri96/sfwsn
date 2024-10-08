import { createClient } from "../lib/superbase/server";

import fetchItem from "./fetchItem";

import { IFetchedItemResult } from "./ts/interfaces";

const fetchItemServer = async (slug: string): Promise<IFetchedItemResult> => {
  const response = await fetchItem(slug, createClient);

  return response;
};

export default fetchItemServer;
