import React from "react";
import "./App.css";
import logo192 from "./img/logo192.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

const App = () => {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div>
      <div className="logo-contenedor">
        <img className="logo" src={logo192} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
};

export default App;
