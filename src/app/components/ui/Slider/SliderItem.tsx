import {
  useRef,
  useCallback,
  useReducer,
  memo,
  useEffect,
  useState,
} from "react";

import CldImage from "../CldImage";
import SliderZoomControllers from "./SliderZoomControllers";
import Loading from "../Loading";

import { ItemImageData } from "@/app/ts/interfaces";
import { ITranslate, TranslateAction } from "./ts/interfaces";

import * as styleFn from "./utils/style";
import style from "./SliderItem.module.scss";

interface IProps {
  data: ItemImageData;
  currentZoom: number;
  isFullWidthImg: boolean;
  zoomControllers: boolean;
  carouselLength: number;
}

const arePropsEqual = (prevProps: IProps, nextProps: IProps) => {
  return (
    prevProps.data.id === nextProps.data.id &&
    prevProps.data.title === nextProps.data.title &&
    prevProps.currentZoom == nextProps.currentZoom
  );
};

const reducer = (
  state: ITranslate,
  action: { type: TranslateAction; value: number }
): ITranslate => {
  if (action.type === "set_translateY") {
    return {
      ...state,
      translateY: action.value,
    };
  } else if (action.type === "set_translateX") {
    return {
      ...state,
      translateX: action.value,
    };
  } else {
    return state;
  }
};

const SliderItem = ({
  data: { title, src },
  currentZoom,
  isFullWidthImg,
  zoomControllers,
  carouselLength,
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const [currentTranslate, dispatch] = useReducer(reducer, {
    translateY: 0,
    translateX: 0,
  });

  const dispatchTranslate = useCallback(
    (type: TranslateAction, value: number) => dispatch({ type, value }),
    []
  );

  useEffect(() => {
    const height = ref.current?.offsetHeight;
    const width = ref.current?.offsetWidth;

    if (height && width) {
      setImageHeight(height);
      setImageWidth(width);
    }
  }, []);
  console.log(imageHeight);
  console.log(imageWidth);

  return (
    <>
      <div
        className={style.container}
        style={{ width: `${100 / carouselLength}%` }}
      >
        <div
          ref={ref}
          className={style.imageWrapper}
          style={styleFn.getItemStyles(isFullWidthImg)}
        >
          {zoomControllers ? (
            <SliderZoomControllers
              currentZoom={currentZoom}
              currentTranslate={currentTranslate}
              dispatchTranslate={dispatchTranslate}
            />
          ) : null}
          {imageHeight && imageWidth ? (
            <CldImage
              className={style.sliderImage}
              style={styleFn.getImageStyles(
                currentZoom,
                currentTranslate,
                isFullWidthImg
              )}
              src={src}
              alt={`Example of ${title}`}
              height={imageHeight}
              width={imageWidth}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default memo(SliderItem, arePropsEqual);
