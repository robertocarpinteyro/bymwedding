import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

class Rsvp extends Component {
  state = {
    name: "",
    email: "",
    rsvp: "",
    events: "",
    notes: "",
    error: {},
    successMessage: "",
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, rsvp, events, notes } = this.state;

    // Validación de campos
    const error = {};
    if (name === "") error.name = "Por favor, ingresa tu nombre";
    if (email === "") error.email = "Por favor, ingresa tu email";
    if (rsvp === "") error.rsvp = "Selecciona el número de reservaciones";
    if (events === "")
      error.events = "Selecciona los eventos a los que asistirás";
    if (notes === "") error.notes = "Por favor, ingresa un mensaje";

    if (Object.keys(error).length > 0) {
      this.setState({ error });
      return;
    }

    // Configuración de EmailJS
    const templateParams = {
      name,
      email,
      rsvp,
      events,
      notes,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID desde .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID desde .env
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public Key desde .env
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          this.setState({
            name: "",
            email: "",
            rsvp: "",
            events: "",
            notes: "",
            error: {},
            successMessage: "¡Gracias! Tu asistencia ha sido confirmada.",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          this.setState({
            successMessage:
              "Hubo un error al enviar tu confirmación. Intenta nuevamente.",
          });
        }
      );
  };

  render() {
    const { name, email, rsvp, events, notes, error, successMessage } =
      this.state;
    return (
      <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="rsvp-wrap">
                <div className="col-12">
                  <div className="section-title section-title4 text-center">
                    <h2>Confirma tu Asistencia</h2>
                    <p>
                      Confírmanos tu asistencia antes del 15 de septiembre para
                      tener todo listo y hermoso para ti.
                    </p>
                  </div>
                </div>
                <form onSubmit={this.subimtHandler}>
                  <div className="contact-form form-style">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          value={name}
                          onChange={this.changeHandler}
                          placeholder="Nombre*"
                          id="fname"
                          name="name"
                        />
                        <p>{error.name ? error.name : ""}</p>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          placeholder="Email*"
                          onChange={this.changeHandler}
                          value={email}
                          id="email"
                          name="email"
                        />
                        <p>{error.email ? error.email : ""}</p>
                      </div>
                      <div className="col col-sm-6 col-12">
                        <select
                          className="form-control"
                          onChange={this.changeHandler}
                          value={rsvp}
                          name="rsvp"
                        >
                          <option disabled value="">
                            Número de reservaciones*
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <p>{error.rsvp ? error.rsvp : ""}</p>
                      </div>
                      <div className="col col-sm-6 col-12">
                        <select
                          className="form-control"
                          onChange={this.changeHandler}
                          value={events}
                          name="events"
                        >
                          <option disabled value="">
                            Estaré asistiendo a...*
                          </option>
                          <option value="Todos los eventos">
                            Todos los eventos
                          </option>
                          <option value="Ceremonia & Fiesta">
                            Ceremonia & Fiesta
                          </option>
                          <option value="Rompehielos">Rompehielos</option>
                        </select>
                        <p>{error.events ? error.events : ""}</p>
                      </div>
                      <div className="col-12 col-sm-12">
                        <textarea
                          className="contact-textarea"
                          value={notes}
                          onChange={this.changeHandler}
                          placeholder="Mensaje"
                          name="notes"
                        ></textarea>
                        <p>{error.notes ? error.notes : ""}</p>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button id="submit" type="submit" className="submit">
                        Confirmar mi asistencia
                      </button>
                      {successMessage && (
                        <p className="success-message">{successMessage}</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rsvp;
