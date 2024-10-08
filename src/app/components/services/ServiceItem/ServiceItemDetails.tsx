import CldImage from "../../ui/CldImage";
import ServiceItemMaterials from "./ServiceItemMaterials";

import { IManufacturerData } from "@/app/ts/interfaces";

import style from "./ServiceItemDetails.module.scss";

const ServiceItemDetails = ({ data }: { data: IManufacturerData }) => {
  const { title, image, items } = data;

  return (
    <div className={style.item}>
      <CldImage
        src={image}
        alt={title}
        height={74}
        width={title.includes("&") ? 358 : 179}
      />
      <ServiceItemMaterials data={items} />
    </div>
  );
};

export default ServiceItemDetails;
