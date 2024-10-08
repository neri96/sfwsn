import { Dispatch, SetStateAction } from "react";

import Button from "../Button";
import Icon from "../Icon";

import IcPlay from "@/app/assets/icons/play.svg";
import IcPause from "@/app/assets/icons/pause.svg";

import * as styleFn from "./utils/style";
import style from "./SliderPagination.module.scss";

const SliderPagination = ({
  currentIndex,
  setCurrentIndex,
  isInfinite,
  sliderLength,
  isAuto,
  toggleAuto,
}: {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isInfinite: boolean;
  sliderLength: number;
  isAuto: boolean;
  toggleAuto: () => void;
}) => {
  return (
    <div className={style.container}>
      {Array.from(Array(sliderLength)).map((_, i) => {
        const index = isInfinite ? i + 1 : i;

        return (
          <div key={index} className={style.item}>
            <Button
              onClick={() => setCurrentIndex(index)}
              customStyle={styleFn.getPaginationBtnStyle(
                currentIndex === index
              )}
            >
              <div
                className={style.current}
                style={{ display: currentIndex === index ? "block" : "none" }}
              />
            </Button>
          </div>
        );
      })}
      {isInfinite ? (
        <Button
          customStyle={{ backgroundColor: "transparent", marginLeft: "5px" }}
          onClick={toggleAuto}
        >
          <Icon
            src={isAuto ? IcPause : IcPlay}
            alt={isAuto ? "Stop auto swipe" : "Activate auto swipe"}
          />
        </Button>
      ) : null}
    </div>
  );
};

export default SliderPagination;
