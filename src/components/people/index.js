import React from 'react';
import Sectiontitle from '../section-title';
import './style.css';

const People = () => {
  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <Sectiontitle section={'Nuestros Padrinos'} />
        <div className="padrinos-content">
          <ul>
            <li>
              <strong>Velación:</strong> Benjamín Sánchez y Clara Juárez
            </li>
            <li>
              <strong>Lazo:</strong> Erika Maurtua y Manuel Gómez
            </li>
            <li>
              <strong>Anillos:</strong> Erika Gómez y Manuel Moreno
            </li>
            <li>
              <strong>Biblia y Ramo:</strong> Macaria Gómez y Adrián Muro
            </li>
            <li>
              <strong>Arras:</strong> Bárbara Sánchez y Brenda Sánchez
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default People;