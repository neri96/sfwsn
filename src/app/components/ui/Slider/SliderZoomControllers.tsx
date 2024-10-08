import { useEffect } from "react";

import cn from "classnames";

import Button from "../Button";
import Icon from "../Icon";

import IcArrow from "@/app/assets/icons/arrow-2.svg";

import { ITranslate, TranslateAction } from "./ts/interfaces";

import style from "./SliderZoomControllers.module.scss";

enum Direction {
  Up = "top",
  Left = "left",
  Right = "right",
  Down = "bottom",
}

const SliderZoomControllers = ({
  currentZoom,
  currentTranslate,
  dispatchTranslate,
}: {
  currentZoom: number;
  currentTranslate: ITranslate;
  dispatchTranslate: (type: TranslateAction, value: number) => void;
}) => {
  useEffect(() => {
    const moveDistance = (100 - 100 / currentZoom) / 2;

    const { translateY, translateX } = currentTranslate;

    if (translateX) {
      dispatchTranslate(
        "set_translateX",
        translateX > 0 ? moveDistance : -moveDistance
      );
    }

    if (translateY) {
      dispatchTranslate(
        "set_translateY",
        translateY > 0 ? moveDistance : -moveDistance
      );
    }
  }, [currentZoom, JSON.stringify(currentTranslate), dispatchTranslate]);

  const handleDirection = (direction: Direction) => {
    const moveDistance = (100 - 100 / currentZoom) / 2;

    if (direction === Direction.Up) {
      dispatchTranslate("set_translateY", moveDistance);
    } else if (direction === Direction.Down) {
      dispatchTranslate("set_translateY", -moveDistance);
    } else if (direction === Direction.Left) {
      dispatchTranslate("set_translateX", moveDistance);
    } else if (direction === Direction.Right) {
      dispatchTranslate("set_translateX", -moveDistance);
    }
  };

  return currentZoom > 1 ? (
    <>
      <div className={cn(style.controller, style.up)}>
        <Button noStyle onClick={() => handleDirection(Direction.Up)}>
          <Icon src={IcArrow} alt="Up" />
        </Button>
      </div>
      <div className={cn(style.controller, style.left)}>
        <Button noStyle onClick={() => handleDirection(Direction.Left)}>
          <Icon src={IcArrow} alt="Left" />
        </Button>
      </div>
      <div className={cn(style.controller, style.right)}>
        <Button noStyle onClick={() => handleDirection(Direction.Right)}>
          <Icon src={IcArrow} alt="Right" />
        </Button>
      </div>
      <div className={cn(style.controller, style.down)}>
        <Button noStyle onClick={() => handleDirection(Direction.Down)}>
          <Icon src={IcArrow} alt="Down" />
        </Button>
      </div>
    </>
  ) : null;
};

export default SliderZoomControllers;
