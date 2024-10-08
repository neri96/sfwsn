"use client";

import cn from "classnames";

import ToolTip from "../ui/ToolTip";
import Icon from "../ui/Icon";
import ItemInfoDescr from "./ItemInfoDescr";
import Description from "./shared/Description";

import IcLink from "@/app/assets/icons/link.svg";
import IcDoc from "@/app/assets/icons/doc.svg";

import style from "./ItemInfo.module.scss";

import { ItemData } from "@/app/ts/interfaces";

type ItemInfoProps = Omit<ItemData, "images">;

const ItemInfo = ({ data }: { data: ItemInfoProps }) => {
  const { title, description, links } = data;

  return (
    <div className={style.container}>
      <div className={style.icons}>
        <div className={cn(style.icon, style.iconDescr)}>
          <ItemInfoDescr title={title} description={description} />
        </div>

        {links.page && links.brochure ? (
          <>
            <div className={style.icon}>
              <ToolTip content="Link">
                <a href={links.page} target="_blank" rel="noopener noreferrer">
                  <Icon src={IcLink} alt="Link for manufacturer website" />
                </a>
              </ToolTip>
            </div>

            {links.brochure ? (
              <div className={style.icon}>
                <ToolTip content="Brochures">
                  <a
                    href={links.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon src={IcDoc} alt="Link for manufacturer brochures" />
                  </a>
                </ToolTip>
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      <div className={style.title}>
        <h1>{title}</h1>
      </div>
      <div className={style.description}>
        <Description data={description} />
      </div>
    </div>
  );
};

export default ItemInfo;
