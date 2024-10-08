"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Overlay from "../../ui/Overlay";
import Dialog from "../../ui/Dialog";
import Description from "../../item/shared/Description";
import Loading from "../../ui/Loading";

import fetchItem from "@/app/services/fetchItem.client";

import { ItemData } from "@/app/ts/interfaces";

const ServiceItemModal = ({
  slug,
  toggleModal,
}: {
  slug: string;
  toggleModal: () => void;
}) => {
  const router = useRouter();

  const [data, setData] = useState<ItemData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (slug) {
        setLoading(true);

        const response = await fetchItem(slug);

        if (response.error) {
          router.push("/error");
        } else {
          setData(response.data);
        }

        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading || !data) return <Loading />;

  return (
    <Overlay onClose={toggleModal}>
      <Dialog title={data.title} withOVerlay onClose={toggleModal}>
        <Description data={data.description} />
      </Dialog>
    </Overlay>
  );
};
export default ServiceItemModal;
