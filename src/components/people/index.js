import React from 'react';
import Sectiontitle from '../section-title';
import './style.css';

const People = () => {
  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <Sectiontitle section={'NUESTROS PADRINOS'} />
        <div className="padrinos-content">
          <ul>
            <li>
              <strong>Velación:</strong><br></br> Benjamín Sánchez y Clara Juárez
            </li>
            <li>
              <strong>Lazo:</strong><br></br>  Erika Maurtua y Manuel Gómez
            </li>
            <li>
              <strong>Anillos:</strong> <br></br> Erika Gómez y Manuel Moreno
            </li>
            <li>
              <strong>Biblia y Ramo:</strong> <br></br> Macaria Gómez y Adrián Muro
            </li>
            <li>
              <strong>Arras:</strong> <br></br> Bárbara Sánchez y Brenda Sánchez
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default People;