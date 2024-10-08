import PageTop from "@/app/components/ui/PageTop";
import ServiceItemDetails from "./ServiceItem/ServiceItemDetails";

import { ItemType } from "@/app/ts/types";
import { IManufacturerData } from "@/app/ts/interfaces";

import style from "./ServicesContainer.module.scss";

const ServicesContainer = ({
  data,
  serviceType,
}: {
  data: IManufacturerData[];
  serviceType: ItemType;
}) => {
  return (
    <>
      <PageTop
        title={
          serviceType === ItemType.Window
            ? "our windows offered"
            : "need a better door? we can do that!"
        }
        background={
          serviceType === ItemType.Window ? "windows.webp" : "doors.webp"
        }
      />

      <div className={style.container}>
        {data.map((element) => (
          <ServiceItemDetails key={element.id} data={element} />
        ))}
      </div>
    </>
  );
};

export default ServicesContainer;
