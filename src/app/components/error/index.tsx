"use client";

import { useRouter } from "next/navigation";

import Button from "../ui/Button";
import style from "./style.module.scss";

const ErrorContainer = () => {
  const router = useRouter();

  const handleRedirect = () => router.push("/");

  return (
    <div className={style.error}>
      <div className={style.message}>
        <h1>Something went wrong. Try again later.</h1>
        <Button
          customStyle={{ height: "50px", width: "170px" }}
          onClick={handleRedirect}
        >
          Go to Home page
        </Button>
      </div>
    </div>
  );
};

export default ErrorContainer;
