import React from "react";
import { Link } from "react-router-dom";
import strory1 from "../../images/story/1.jpg";
import strory2 from "../../images/story/2.jpg";
import strory3 from "../../images/story/3.jpg";
import strory4 from "../../images/story/4.jpg";
import strory5 from "../../images/story/5.jpg";
import icono1 from "../../images/icono1.png";
import icono2 from "../../images/icono2.png";
import "./style.css";

const Story = () => {
  return (
    <div id="story" className="story-area section-padding ">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>NUESTRA HISTORIA</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              
              <div className="content-wrapper">
                <div className="item">
              
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory1} alt="Nuestra Historia" />
                        </div>
                      </div>
                    </div>
                    <h2>EL INICIO</h2>
                    <span className="date">NOVIEMBRE 2022</span>
                    <p className="textp">
                      La historia comenzó un buen sábado haciendo CrossFit en
                      Puebla. Empezamos con una muy buena fiesta que se prolongó
                      al punto de ver el amanecer cantando con mariachis y
                      norteños. A partir de ahí, todos los fines de semana nos
                      hemos visto sin falta.
                    </p>
                  </div>
                </div>
                <div className="item">
                
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="Primera Navidad" />
                        </div>
                      </div>
                    </div>
                    <h2>PRIMERA NAVIDAD</h2>
                    <span className="date">DICIEMBRE 2022</span>
                    <p className="textp">
                      Las cosas se fueron acomodando muy fácil: nuestras ideas,
                      nuestro carácter, nuestras metas se han mezclado muy bien.
                      Todo ha salido tan bonito que nos conocimos en noviembre y
                      en diciembre pasamos nuestra primera Navidad juntos. ¡Y ya
                      para agosto tuvimos a la Mila (terrorista)!
                    </p>
                  </div>
                </div>
                <div className="item">
                 
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory3} alt="San Carlos" />
                        </div>
                      </div>
                    </div>
                    <h2>SAN CARLOS</h2>
                    <span className="date">ENERO 2023</span>
                    <p className="textp">
                      Tenemos que confesarles que TODOS nos han preguntado por
                      qué nos casamos en Hermosillo, y les mentimos. Ninguno de
                      los dos somos de ahí, pero el inicio de nuestro noviazgo
                      coincidió con un viaje por allá, y guardamos con mucho
                      cariño los recuerdos de un atardecer juntos en San Carlos.
                    </p>
                  </div>
                </div>
                <div className="item">
                
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory4} alt="La Propuesta" />
                        </div>
                      </div>
                    </div>
                    <h2>LA PROPUESTA</h2>
                    <span className="date">OCTUBRE 2024</span>
                    <p className="textp">
                      Así se pasaron casi dos años. Le regalé a Moni una entrada
                      para una carrera sin que ella se imaginara que el
                      verdadero plan era pedirle que se casara conmigo. Y así,
                      con muchos nervios, en un hermoso atardecer adornado con
                      una gran luna, Moni me regaló el "sí" más lindo que he
                      escuchado.
                    </p>
                  </div>
                </div>
                <div className="item">
                 
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory5} alt="Agradecimientos" />
                        </div>
                      </div>
                    </div>
                  
                    <p className="textp">
                      De corazón, le agradecemos a nuestra familia (que incluye
                      a la de sangre y a los amigos) las alegrías que nos
                      regalan con su amistad y con su amor. Gracias nuevamente
                      por acompañarnos en esta fecha tan especial. Deseamos que
                      nos disfrutemos mutuamente en nuestra gran celebración.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
