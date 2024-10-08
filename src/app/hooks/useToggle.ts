"use client";

import { useState, Dispatch, SetStateAction } from "react";

const useToggle = (
  defaultState?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState<boolean>(defaultState || false);

  const toggle = () => setIsActive((prevState) => !prevState);

  return [isActive, toggle, setIsActive];
};

export default useToggle;
