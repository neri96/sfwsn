import { useMediaQuery } from "react-responsive";

import CldImage from "../CldImage";

import cn from "classnames";

import * as styleFn from "./utils/style";
import style from "./SliderFooter.module.scss";

import { ItemImageData } from "@/app/ts/interfaces";

const imageWidth = 116;

const SliderFooter = ({
  currentIndex,
  handleSlide,
  items,
}: {
  currentIndex: number;
  handleSlide: (arg0: number) => void;
  items: ItemImageData[];
}) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div className={style.container}>
      <div
        className={cn(style.footerWrapper, {
          [style.centered]: items.length < (isSmallScreen ? 3 : 5),
        })}
      >
        <div
          className={style.footer}
          style={styleFn.getSilderFooterStyle(
            currentIndex,
            imageWidth,
            items.length,
            isSmallScreen
          )}
        >
          {items.map(({ id, title, src }, index) => {
            return (
              <div
                key={id}
                className={style.itemFooter}
                style={{
                  width: `${imageWidth}px`,
                  opacity: `${index === currentIndex ? 1 : 0.6}`,
                }}
                onClick={() => handleSlide(index)}
              >
                <CldImage src={src} alt={title} height={70} width={70} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderFooter;
