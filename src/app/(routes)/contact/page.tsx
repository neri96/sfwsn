import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";

import ContactContainer from "@/app/components/contact/ContactContainer";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return (
    <PageLayout fullWidth topMargin>
      <ContactContainer />
    </PageLayout>
  );
};

export default Contact;
