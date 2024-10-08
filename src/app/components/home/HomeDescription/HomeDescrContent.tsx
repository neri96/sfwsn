import cn from "classnames";
import style from "./HomeDescrContent.module.scss";

const HomeDescrContent = ({
  currentIndex,
  data,
}: {
  currentIndex: number;
  data: { id: string; link: string; content: string }[];
}) => {
  return (
    <div className={style.content}>
      {data.map(({ id, link, content }, index: number) => {
        return (
          <div
            key={id}
            className={cn(style.current, {
              [style.greaterThanMiddle]: index !== currentIndex && index >= 3,
              [style.notGreaterThanMiddle]: index !== currentIndex && index < 3,
              [style.currentContent]: index === currentIndex,
            })}
          >
            <div className={style.title}>
              <h4>{link}</h4>
            </div>
            <div className={style.body}>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeDescrContent;
