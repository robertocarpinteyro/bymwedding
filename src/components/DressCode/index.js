import React from "react";
import "./style.css";
import LocationMap3 from "../LocationModal/LocationModal3";
const DressCode = () => {
  return (
    <div id="dress-code" className="dress-code-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Código de Vestimenta</h2>
          <p>
            Queremos que luzcan espectaculares en nuestro día especial. Aquí
            están las recomendaciones para el código de vestimenta.
          </p>
        </div>
        <div className="dress-code-content">
          {/* Mujeres */}
          <div className="dress-code-section">
            <h3>Mujeres</h3>
            <p>
              Vestido largo, elegante, de cualquier color excepto los reservados
              para la novia.
            </p>
            <p>Por favor, evita los siguientes tonos:</p>
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
          </div>

          {/* Hombres */}
          <div className="dress-code-section">
            <h3>Hombres</h3>
            <p>
              Formal. Pueden usar traje o guayabera elegante. <br></br>¡Queremos
              verlos guapos!
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
                <h3>¿Dónde Hospedarse?</h3>
                <p>
                  Recomendamos este hotel cercano y cómodo para el fin de
                  semana:
                </p>
                 <LocationMap3
                  buttonClass="location-btn"
                  maxWidth="md"
                />
                <p>
                  Si necesitan ayuda extra con reservaciones, no duden en
                  escribirnos.
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