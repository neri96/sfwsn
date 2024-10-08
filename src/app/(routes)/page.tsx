import { Metadata } from "next";

import PageLayout from "../components/ui/PageLayout";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeDescription from "../components/home/HomeDescription";
import HomeTeam from "../components/home/HomeTeam";
import HomeSteps from "../components/home/HomeSteps";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageLayout fullWidth>
      <HomeCarousel />
      <HomeDescription />
      <HomeTeam />
      <HomeSteps />
    </PageLayout>
  );
}
