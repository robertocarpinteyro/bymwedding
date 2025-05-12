import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LocationMap from "../LocationModal/LocationModal";

const Welcome = () => {
  return (
    <div className="welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>Bienvenidos</h2>
              <p>
                Nos emociona compartir con ustedes uno de los días más
                importantes de nuestras vidas. <br></br>Será una celebración íntima, con
                las personas que más queremos. <br></br>¡Gracias por acompañarnos en este
                viaje que apenas comienza!
              </p>
              <div className="btn">
                <Link to="/home">Confirma tu asistencia</Link>
              </div>
              <LocationMap buttonClass={"location-btn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
