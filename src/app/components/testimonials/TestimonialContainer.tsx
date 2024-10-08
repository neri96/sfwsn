"use client";
import dynamic from "next/dynamic";

import PageTop, { TitlePosition } from "@/app/components/ui/PageTop";
const TestimonalList = dynamic(() => import("./TestimonialList"), {
  ssr: false,
});

const TestimonialContainer = () => {
  return (
    <>
      <PageTop
        title="Testimonials"
        background={"testimonals.webp"}
        height={700}
        titlePosition={TitlePosition.Top}
      />
      <TestimonalList />
    </>
  );
};

export default TestimonialContainer;
