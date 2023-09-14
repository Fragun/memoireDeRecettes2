export default function Price(price) {
  function priceRecipe() {
    switch (price) {
      case 1:
        return (
          <div className={` d-flex justify-content-center align-items-center`}>
            <i className="las la-euro-sign la-2x"></i>
          </div>
        );
      case 2:
        return (
          <div className={` d-flex justify-content-center align-items-center`}>
            <i className="las la-euro-sign la-2x"></i>
            <i className="las la-euro-sign la-2x"></i>
          </div>
        );

      case 3:
        return (
          <div className={` d-flex justify-content-center align-items-center`}>
            <i className="las la-euro-sign la-2x"></i>
            <i className="las la-euro-sign la-2x"></i>
            <i className="las la-euro-sign la-2x"></i>
          </div>
        );

      default:
        return <></>;
    }
  }
  return <div>{priceRecipe(price)} </div>;
}
