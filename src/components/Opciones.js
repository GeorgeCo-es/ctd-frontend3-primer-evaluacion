import React from "react";
import Button from "./Button";

function Opciones(props) {
  return (
    <>
      <div className="opciones">
        <div className="opcion">
          <Button text={"A"} onClick={props.handleAnswerA} />{" "}
          <h3> {props.opcionA}</h3>
        </div>
      </div>
      <div className="opciones">
        <div className="opcion">
          <Button text={"B"} onClick={props.handleAnswerB} />{" "}
          <h3> {props.opcionB}</h3>
        </div>{" "}
      </div>
    </>
  );
}

export default Opciones;
