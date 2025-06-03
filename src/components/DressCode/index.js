import React from "react";
import "./style.css";
import LocationMap3 from "../LocationModal/LocationModal3";
const DressCode = () => {
  return (
    <div id="dress-code" className="dress-code-area">
      <div className="container">
        <div className="section-title text-center">
          <h2>CÓDIGO DE VESTIMENTA</h2>
           <div className="mujeres-separator"></div>
          <p>
            Queremos que luzcan espectaculares en nuestro día especial. Aquí
            están las recomendaciones para el código de vestimenta.
          </p>
        </div>
        <div className="dress-code-content">
          {/* Mujeres */}
          <div>
            <strong>
              {" "}
              <h3>Mujeres</h3>
            </strong>
            <p>
              Vestido largo, elegante, de cualquier color excepto los reservados
              para la novia.
            </p>
            <strong>
              {" "}
              <p>Por favor, evita los siguientes tonos:</p>
            </strong>
            <ul className="restricted-colors">
              <li>Blanco</li>
              <li>Ivory claro</li>
              <li>Ivory</li>
              <li>Ivory oscuro</li>
              <li>Champagne</li>
            </ul>
            <a
              href="https://pin.it/DNute23sz"
              target="_blank"
              rel="noopener noreferrer"
              className="dress-code-button"
            >
              Ejemplos
            </a>
            <div className="mujeres-separator"></div>
          </div>

          {/* Hombres */}
          <div>
            <strong>
              {" "}
              <h3>Hombres</h3>
            </strong>
            <p>
              Formal (traje elegante). <br></br>
              <strong>¡Queremos verlos guapos!</strong>
            </p>
            <a
              href="https://pin.it/7Ha49ljSw"
              target="_blank"
              rel="noopener noreferrer"
              className="dress-code-button"
            >
              Ejemplos
            </a>
          </div>
        </div>

        {/* ¿Dónde Hospedarse? */}
        <div className="ceremony-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ceremony-content text-center">
                <h2>¿DÓNDE HOSPEDARSE?</h2>
                <div className="mujeres-separator"></div>
                <p>
                  Recomendamos este hotel cercano y cómodo para el fin de
                  semana:
                </p>
                <LocationMap3 buttonClass="location-btn" maxWidth="md" />
                <p>
                  <strong>
                    {" "}
                    Si necesitan ayuda extra con reservaciones, no duden en
                    escribirnos.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
