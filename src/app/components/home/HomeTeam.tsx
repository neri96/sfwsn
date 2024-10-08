import PageSection from "../ui/PageSection";
import Carousel from "../ui/Carousel";

import { carouselData } from "@/app/constants/carousel";

const HomeTeam = () => {
  return (
    <PageSection header="our team">
      <Carousel data={carouselData} />
    </PageSection>
  );
};

export default HomeTeam;
