import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <i
            key={index}
            className={index <= rating ? "la la-star la-2x" : "lar la-star la-2x"}
            onClick={() => handleStarClick(index)}
          />
          
        );
      })}
      { rating ? (
      <p>Votre note : {rating} étoiles</p>)
    : ('')}
    </div>
  );
}