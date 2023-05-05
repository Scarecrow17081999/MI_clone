import React from "react";
import "../../styles/ProductReviews.scss";
const ProductReviews = ({ productReviews }) => {
  return (
    <div className="produceRviews">
      {productReviews?.map((e, i) => {
        return (
          <ProductReviewCard
            key={i}
            price={e.price}
            name={e.name}
            image={e.image}
            review={e.review}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default ProductReviews;

const ProductReviewCard = ({ price, name, image, review, index }) => {
  return (
    <div className="product-review-card">
      <img src={image} alt={index} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};
