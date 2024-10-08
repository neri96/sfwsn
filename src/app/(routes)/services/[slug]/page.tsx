import { Metadata } from "next";
import { redirect } from "next/navigation";

import PageLayout from "@/app/components/ui/PageLayout";
import ServicesContainer from "@/app/components/services/ServiceContainer";

import fetchManufacturers from "@/app/services/fetchManufacturers";

import { ItemType } from "@/app/ts/types";

interface IPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: IPageProps) {
  const metadata: Record<string, Metadata> = {
    windows: {
      title: "Windows",
      alternates: {
        canonical: "/window",
      },
    },
    doors: {
      title: "Doors",
      alternates: {
        canonical: "/door",
      },
    },
    entryDoors: {
      title: "Entry Doors",
      alternates: {
        canonical: "/entry-door",
      },
    },
  };

  return metadata[params.slug];
}

export default async function Service({ params }: IPageProps) {
  const { data, error } = await fetchManufacturers(params.slug as ItemType);

  if (error || !data) {
    redirect("/error");
  }

  return (
    <PageLayout topMargin fullWidth>
      <ServicesContainer data={data} serviceType={params.slug as ItemType} />
    </PageLayout>
  );
}
