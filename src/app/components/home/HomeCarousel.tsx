import Slider from "../ui/Slider";

import { ItemImageData } from "@/app/ts/interfaces";

const carouselData: ItemImageData[] = [
  {
    title: "Slide 1",
    src: "68567454062__CDA15394-DBC3-4BF9-9968-688637A95C58_kvuf4v",
  },
  { title: "Slide 2", src: "IMG_7671_ajuam6" },
  { title: "Slide 3", src: "IMG_8908_tjqn5k" },
  {
    title: "Slide 4",
    src: "71236550181__2D95E002-F183-4845-B919-C75FCE9EBEE7_k98xxp",
  },
  { title: "Slide 5", src: "IMG_0496_zighyd" },
  { title: "Slide 6", src: "IMG_5996_cgcmeo" },
  {
    title: "Slide 7",
    src: "72184839107__728A12AC-5B2A-490D-B726-2B4A1F360147_rdosxf",
  },
  { title: "Slide 8", src: "IMG_4997_wxfhxa" },
];

const HomeCarousel = () => {
  return (
    <Slider
      items={carouselData}
      isFullWidthImg
      isPagination
      isInfinite
      isAutoDefault
    />
  );
};

export default HomeCarousel;
