import cn from "classnames";

import Button from "../Button";
import Icon from "../Icon";

import ArrowMove from "../../../assets/icons/arrow-move.svg";

import style from "./StilderControls.module.scss";

interface ISliderControlsProps {
  currentIndex: number;
  carouselLength: number;
  isInfinite: boolean;
  isTransitionActive: boolean;
  handleSlide: (arg1: number) => void;
}

const SliderControls = ({
  currentIndex,
  carouselLength,
  isInfinite,
  isTransitionActive,
  handleSlide,
}: ISliderControlsProps) => {
  return (
    <>
      <div className={style.button}>
        <Button
          disabled={!isTransitionActive || (!isInfinite && currentIndex === 0)}
          onClick={() => handleSlide(currentIndex - 1)}
        >
          <Icon src={ArrowMove} alt="previous slide" />
        </Button>
      </div>

      <div className={cn(style.button, style.buttonRight)}>
        <Button
          disabled={
            !isTransitionActive ||
            (!isInfinite && currentIndex === carouselLength - 1)
          }
          onClick={() => handleSlide(currentIndex + 1)}
        >
          <Icon src={ArrowMove} alt="next slide" />
        </Button>
      </div>
    </>
  );
};

export default SliderControls;
