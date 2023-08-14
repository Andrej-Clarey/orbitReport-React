import satData from "./satData";
import "../App"

const Buttons = (props) => {
  return (
    <div className="FlexContainer">
      {props.displaySats.map((sat, id) => {
        return(
          <button onClick={() => props.filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => props.setSat(satData)}>
        All Orbits
        </button>
      </div>
  )
};

export default Buttons;