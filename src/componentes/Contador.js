import React from "react";
import "../estilos/contador.css";

const Contador = ({ numClicks }) => {
  return <div className="contador">{numClicks}</div>;
};

export default Contador;
