import Image from "next/image";

import IcLoading from "@/app/assets/icons/loading.svg";

import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      <Image src={IcLoading} alt="Loading, please wait" />;
    </div>
  );
};

export default Loading;
