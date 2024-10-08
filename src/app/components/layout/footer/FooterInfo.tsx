import style from "./FooterInfo.module.scss";

const FooterInfo = () => {
  return (
    <>
      <div className={style.info}>
        <p className={style.title}>Window Station</p>
        <p>
          San Francisco Windows & Doors Widow Installation & Replacement
          Contractors in the SF Bay Area
        </p>
        <p>
          We have been serving the San Francisco Bay Area with New Windows,
          Installation, Window Replacement & Doors as an experienced and caring
          dealer since 1995. We always provide free estimates and great service
          with every job. Please call us today with your home improvement or
          commercial needs in the San Francisco Bay Area.
        </p>
      </div>
      <div>
        <p className={style.number}>
          Call us today at <a href="tel:4152954502">415-295-4502</a> or{" "}
          <a href="tel:18003420308">800-342-0308</a>
        </p>
        <p>If you have any other questions or comments, please contact us.</p>
        <p>License 976606</p>
      </div>
    </>
  );
};

export default FooterInfo;
