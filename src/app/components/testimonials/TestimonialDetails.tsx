import style from "./TestimonialDetails.module.scss";

interface IReview {
  reviewId: string;
  userId: string;
  userName: string;
}

const TestimonialDetails = ({
  review,
  isLoaded,
}: {
  review: IReview;
  isLoaded: boolean;
}) => {
  return (
    <div
      className={style.container}
      style={{ background: !isLoaded ? "none" : "rgba(0, 0, 0, 0.5)" }}
    >
      <span
        className="yelp-review"
        data-review-id={review.reviewId}
        data-hostname="www.yelp.com"
      ></span>
    </div>
  );
};

export default TestimonialDetails;
