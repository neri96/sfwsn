"use client";

import { useState, useRef, useEffect } from "react";

import Loading from "../ui/Loading";
import TestimonialDetails from "./TestimonialDetails";

import { reviews } from "@/app/constants/testimonalListConst";

import style from "./TestimonialList.module.scss";

const maxAttempts = 5;

const TestimonialList = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const attemptRef = useRef<number>(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;

    let interval: NodeJS.Timeout | null = null;

    script.onload = () => {
      interval = setInterval(() => {
        attemptRef.current += 1;

        const reviewElements = document.querySelectorAll(".yelp-review");
        const failedLoad = Array.from(reviewElements).find((reviewElem) => {
          const height =
            (reviewElem as HTMLIFrameElement).style.height ||
            reviewElem.getAttribute("height");

          if (!parseInt(String(height))) return reviewElem;
        });

        if (!failedLoad || attemptRef.current >= maxAttempts) {
          setIsLoaded(true);

          if (interval) clearInterval(interval);
        }
      }, 500);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);

      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.container}>
      {!isLoaded ? <Loading /> : null}
      {reviews.map((review) => {
        return (
          <TestimonialDetails
            key={review.reviewId}
            review={review}
            isLoaded={isLoaded}
          />
        );
      })}
    </div>
  );
};

export default TestimonialList;
