import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Link } from "react-router-dom";
import "./style.css";

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="close" onClick={this.menuHandler}>
            <i className="fa fa-close"></i>
          </div>
          <div className="logo2">
            <h2>
              <Link to="/home">Benjamín & Mónica</Link>
            </h2>
          </div>
          <ul className="responsivemenu">
            <li>
              <AnchorLink href="#home">Inicio</AnchorLink>
            </li>

            <li>
              <AnchorLink href="#event">Evento</AnchorLink>
            </li>

            <li>
              <AnchorLink href="#gift">Mesa de Regalos</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#rsvp">Asistencia</AnchorLink>
            </li>
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
