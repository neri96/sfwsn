import { redirect } from "next/navigation";

import PageLayout from "@/app/components/ui/PageLayout";
import Item from "@/app/components/item";

import fetchItem from "@/app/services/fetchItem.server";

import * as helpers from "@/app/helpers/utils";

interface IPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: IPageProps) {
  const { data, error } = await fetchItem(params.slug);

  if (error) {
    redirect("/");
  }

  if (data) {
    const { title, description } = data;

    const metadata = {
      title: helpers.capitalize(title),
      description: description.reduce((acc, element) => (acc += " " + element)),
    };

    return metadata;
  }
}

export default async function Service({ params }: IPageProps) {
  const { data, error } = await fetchItem(params.slug);

  if (error || !data) {
    redirect("/error");
  }

  return (
    <PageLayout topMargin fullWidth>
      <Item data={data} />
    </PageLayout>
  );
}
