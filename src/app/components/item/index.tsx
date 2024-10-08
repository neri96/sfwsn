import ItemInfo from "./ItemInfo";
import ItemGallery from "./ItemGallery";

import style from "./style.module.scss";

import { ItemData } from "@/app/ts/interfaces";

const Item = ({ data }: { data: ItemData }) => {
  const { images, ...dataDecriptive } = data;

  return (
    <div className={style.item}>
      <ItemInfo data={dataDecriptive} />
      <ItemGallery data={images} />
    </div>
  );
};
export default Item;
