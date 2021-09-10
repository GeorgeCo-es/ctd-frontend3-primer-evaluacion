import React from "react";

function Respuestas(props) {
  return (
    <div>
      <p>Selección anterior: {props.letra.toUpperCase()}</p>
      <p>Historial de opciones elegidas:</p>
      <ul>
        {props.list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Respuestas;
