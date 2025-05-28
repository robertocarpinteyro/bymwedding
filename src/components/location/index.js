import React from "react";
import Sectiontitle from "../section-title";
import strory1 from "../../images/events/1.jpg";
import strory2 from "../../images/events/2.jpg";
import strory3 from "../../images/events/3.jpg";
import LocationMap from "../LocationModal/LocationModal";
import LocationMap2 from "../LocationModal/LocationModal2";
import LocationMap3 from "../LocationModal/LocationModal3";
import "./style.css";

const Location = () => {
  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <Sectiontitle section={"¿DÓNDE Y CUÁNDO?"} />
        <div className="service-area-menu">
          {/* Ceremonia & Fiesta */}
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img className="marco-dorado" src={strory1} alt="Ceremonia y Fiesta" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>CEREMONIA & FIESTA</h3>
                  <strong>
                    <span>11 de octubre de 2025</span>
                    <span>📍 Vila Toscana</span>
                  </strong>
                   <br />
                  <LocationMap buttonClass={"location-btn"} />
                  <br />
                  <span>
                    <strong> Misa | 4:00 p.m.</strong>
                  </span>
                  <span>
                    <strong>Cóctel de bienvenida | 6:00 pm</strong>
                  </span>

                  <p>
                    Deseamos que pasen una velada relajada sin preocupaciones,
                    divirtiéndose al máximo. Por este motivo les pedimos que
                    durante esta tarde nos acompañen únicamente adultos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rompehielo: Pre-boda */}
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img className="marco-dorado" src={strory2} alt="Rompehielo Pre-boda" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content ceromony-content2">
                  <h3>ROMPEHIELOS</h3>

                  <span>
                    <strong> 10 de octubre de 2025 | 6:00 p.m.</strong>
                  </span>
                  <strong>
                    {" "}
                    <span>📍 La Ruina</span>
                  </strong>
                   <br />
                  <LocationMap2 buttonClass={"location-btn"} />
                  <p>Vengan cómodos y con ganas de pasarla bien.</p>
                  <span>
                    Queremos que el fin de semana esté lleno de momentos
                    bonitos, por eso organizamos una reunión informal y tengan
                    la oportunidad de conocerse antes del gran día.
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
