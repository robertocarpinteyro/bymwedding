import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'
import LocationMap from '../LocationModal/LocationModal'
import LocationMap2 from '../LocationModal/LocationModal2'
import LocationMap3 from '../LocationModal/LocationModal3'
import './style.css'

const Location = () => {
    return (
        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'¿Dónde y Cuándo?'} />
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
                                    <span><strong>Misa:</strong> 11 de octubre de 2025, 4:00 pm</span>
                                    <span>📍 Vila Toscana</span>
                                    <LocationMap buttonClass={'location-btn'} />
                                    <span><strong>Cóctel de bienvenida:</strong> 6:00 pm (mismo lugar)</span>
                                    <p><strong>Nota importante:</strong> Este evento es solo para adultos. (No niños)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rompehielo: Pre-boda */}
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="ceromony-content ceromony-content2">
                                    <h3>Rompehielo: Pre-boda</h3>
                                    <span>Queremos que el fin de semana esté lleno de momentos bonitos, por eso organizamos una reunión informal para convivir antes de la boda.</span>
                                    <span><strong>10 de octubre a las 6:00 pm</strong></span>
                                    <span>📍 La Ruina</span>
                                    <LocationMap2 buttonClass={'location-btn'} />
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
                        {/* ¿Dónde Hospedarse? */}

                        <div className="Ceremony-wrap">
                        <div className="row">
                        
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>¿Dónde Hospedarse?</h3>  
                                    <p>Recomendamos este hotel cercano y cómodo para el fin de semana:</p>
                                    <LocationMap3 buttonClass={'location-btn'} />
                                    <p>Si necesitan ayuda extra con reservaciones, no duden en escribirnos.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={strory3} alt="Ceremonia y Fiesta" />
                                </div>
                            </div>
                        </div>
                    </div>
                        

                    {/* Dress Code de Boda */}
                    <div className="Ceremony-wrap">
                        <div className="row">

                            <div className="col-lg-">
                                <div className="ceromony-content">
                                    <h3>Dress Code de Boda</h3>
                                    <p><strong>Mujeres:</strong> Vestido largo, elegante, de cualquier color excepto los reservados para la novia.</p>
                                    <p>Por favor, evita los siguientes tonos:</p>
                                    <ul>
                                        <li>Blanco</li>
                                        <li>Ivory claro</li>
                                        <li>Ivory</li>
                                        <li>Ivory oscuro</li>
                                        <li>Champagne</li>
                                    </ul>
                                    <p>Estos tonos están reservados exclusivamente para la novia.</p>
                                    <p><strong>Hombres:</strong> Formal. Pueden usar traje o guayabera elegante. ¡Queremos verlos guapos!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    )
}

export default Location;