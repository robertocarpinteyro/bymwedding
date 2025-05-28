import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class Gift extends Component {
  render() {
    return (
      <div id="gift" className="gift-area">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>MESA DE REGALOS</h2>
              <p>
                Su presencia es lo más importante para nosotros. <br></br>Hemos preparado
                una mesa de regalos donde podrás elegir algo especial para
                nosotros.
              </p>
            </div>
          </div>
          <div className="gift-content">
            <br></br>
            <div className="gift-link">
              <a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51634139"
                target="_blank"
                rel="noopener noreferrer"
                className="gift-button"
              >
                Ver mesa de regalos
              </a>
            </div>
            <div className="gift-details">
              <p>
                Si prefieres hacerlo de manera más práctica, también puedes
                apoyarnos con un detalle en efectivo al siguiente número de
                cuenta:
              </p>
              <ul>
                <li>
                  <strong>Cuenta BBVA:</strong> Mónica Gómez Maurtua
                </li>
                <li>
                  <strong>Cuenta:</strong> 152 743 7417
                </li>
                <li>
                  <strong>Cuenta CLABE:</strong> 012 180 01527437417 7
                </li>
                <li>
                  <strong>Tarjeta de débito:</strong> 4152 3140 0409 8706
                </li>
              </ul>
              <p className="important-note">
                <strong>Importante:</strong> En el concepto favor de indicar tu
                nombre para que podamos agradecerte después.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;