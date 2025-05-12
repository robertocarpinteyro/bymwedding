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
        <Sectiontitle section={"¿Dónde y Cuándo?"} />
        <div className="service-area-menu">
          {/* Ceremonia & Fiesta */}
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img src={strory1} alt="Ceremonia y Fiesta" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>Ceremonia & Fiesta</h3>
                  <span>11 de octubre de 2025</span>
                  <span>📍 Vila Toscana</span>
                  <LocationMap buttonClass={"location-btn"} />
                    <br />
                  <span>
                    <strong> Misa |</strong> 4:00 p.m.
                  </span>
                  <span>
                    <strong>Cóctel de bienvenida | </strong> 6:00 pm
                  </span>
                  <p>
                    <strong>Importante:</strong> Por esta ocasión, les pedimos
                    que solo nos acompañen adultos, ya que el evento ha sido
                    organizado con el propósito de divertirnos y pasar un
                    agradable momento juntos. (No niños)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rompehielo: Pre-boda */}
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-7">
                <div className="ceromony-content ceromony-content2">
                  <h3>Rompehielos</h3>
                  <span>
                    Queremos que el fin de semana esté lleno de momentos
                    bonitos, por eso organizamos una reunión informal y tengan
                    la oportunidad de conocerse antes del gran día.
                  </span>
                  <br />
                   <span>
                    <strong> 10 de octubre de 2025 |</strong> 6:00 p.m.
                  </span>
                  <span>📍 La Ruina</span>
                  <LocationMap2 buttonClass={"location-btn"} />
                  <p>Vengan cómodos y con ganas de pasarla bien.</p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img src={strory2} alt="Rompehielo Pre-boda" />
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
