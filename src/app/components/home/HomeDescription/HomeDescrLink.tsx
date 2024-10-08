import cn from "classnames";
import style from "./HomeDescrLink.module.scss";

const HomeDescrLink = ({
  currentTab,
  data,
  handleTabData,
}: {
  currentTab: string;
  data: { id: string; link: string; content: string }[];
  handleTabData: (id: string, index: number) => void;
}) => {
  return (
    <div className={style.tabLinkContainer}>
      <div className={style.tabLinks}>
        {data.map(({ id, link }, index) => {
          return (
            <div
              key={id}
              style={{ left: `${index * 137}px` }}
              className={cn(style.tabLink, {
                [style.tabLinkCurrent]: currentTab === id,
              })}
              onClick={() => handleTabData(id, index)}
            >
              <button>{link}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeDescrLink;
