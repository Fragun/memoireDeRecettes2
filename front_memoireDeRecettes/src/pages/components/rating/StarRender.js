export default function StarRender({ starCount }) {
  const renderStarRating = () => {
    const maxStars = 5;

    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      const roundedRating = Math.round(starCount * 2) / 2;

      if (i <= roundedRating) {
        stars.push(<i key={i} className="la la-star la-2x"></i>);
      } else if (i - 0.5 <= roundedRating) {
        stars.push(<i key={i} className="las la-star-half-alt la-2x"></i>);
      } else {
        stars.push(<i key={i} className="lar la-star la-2x"></i>);
      }
    }

    return <div>{stars}</div>;
  };

  return <>{renderStarRating(starCount)}</>;
}
