import React from "react";

function Historial(props) {
  return (
    <div>
      <h5 className="opcion">Seleccion anterior: {props.letra}</h5>
      {/* <h5 className="opcion">{props.seleccion}</h5> */}
    </div>
  );
}

export default Historial;
