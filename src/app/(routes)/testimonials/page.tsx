import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";

import TestimonialContainer from "@/app/components/testimonials/TestimonialContainer";

export const metadata: Metadata = {
  title: "Testimonials",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function Testimonials() {
  return (
    <PageLayout fullWidth>
      <TestimonialContainer />
    </PageLayout>
  );
}
