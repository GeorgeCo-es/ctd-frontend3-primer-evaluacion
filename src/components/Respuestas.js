import React from "react";
import ListItem from "./ListItem";

function Respuestas(props) {
  const respuestas = props.respuestas;
  return (
    <div>
      <p>Selección anterior: {props.letra}</p>
      <p>Historial de opciones elegidas:</p>
      <ul>
        {props.list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>

    // // respuestas.length=0?(
    // //   <ListItem key={letra.toString()}
    // //   value={0} />
    // // ):(
    // <ul>
    //   {respuestas.map((letra) =>
    //     <li>{props.value}</li>
    //       key={letra.toString()}
    //       value={letra} />
    //   )}
    // </ul>
  );
}

export default Respuestas;
