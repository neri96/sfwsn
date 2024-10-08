import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";
import ErrorContainer from "@/app/components/error";

export const metadata: Metadata = {
  title: "Error",
};

export default function Error() {
  return (
    <PageLayout fullWidth>
      <ErrorContainer />
    </PageLayout>
  );
}
