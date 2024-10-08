import { useReducer } from "react";

enum ZoomAction {
  Increment,
  Decrement,
}

export interface IZoomResult {
  currentZoom?: number;
  incrementZoom: () => void;
  decrementZoom: () => void;
  reachedMin: boolean;
  reachedMax: boolean;
}

const useZoom = (): IZoomResult => {
  const scales = [1, 1.5, 2, 2.5];

  const reducer = (state: number, action: { type: ZoomAction }) => {
    const index = scales.indexOf(state);

    if (action.type === ZoomAction.Increment) {
      return scales[index + 1];
    } else if (action.type === ZoomAction.Decrement) {
      return scales[index - 1];
    } else {
      return scales[index];
    }
  };

  const [currentZoom, dispatch] = useReducer(reducer, scales[0]);

  const incrementZoom = () => dispatch({ type: ZoomAction.Increment });
  const decrementZoom = () => dispatch({ type: ZoomAction.Decrement });

  return {
    currentZoom,
    incrementZoom,
    decrementZoom,
    reachedMin: currentZoom === scales[0],
    reachedMax: currentZoom === scales[scales.length - 1],
  };
};

export default useZoom;
