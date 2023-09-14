export default function Difficulty(difficulty) {

    function difficultyRecipe(difficulty) {
        switch (difficulty) {
          case 1:
            return (
              <div className="d-flex justify-content-center align-items-center">
                <h4>Facile</h4>
                <i className="las la-mitten la-2x"></i>
              </div>
            );
          case 2:
            return (
              <div className="d-flex justify-content-center align-items-center">
                <h4> Moyenne</h4>
                <div>
                  <i className="las la-mitten la-2x"></i>
                  <i className="las la-mitten la-2x"></i>{" "}
                </div>
              </div>
            );
          case 3:
            return (
              <div className="d-flex justify-content-center align-items-center">
                <h4>Difficile</h4>
                <div>
                  <i className="las la-mitten la-2x"></i>
                  <i className="las la-mitten la-2x"></i>
                  <i className="las la-mitten la-2x"></i>{" "}
                </div>
              </div>
            );
    
          default:
            break;
        }
      }

    return(
        <div className="d-flex flex-row"> 
        {difficultyRecipe(difficulty)}
      </div>
    )
}