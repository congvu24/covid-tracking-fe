import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Header extends Component {
  handleToogleTheme = () => {
    this.props.actions.actionToogle();
  };
  render() {
    return (
      <Row className="header stick">
        <img src="/logo192.png" />
        <ul>
          <li>About me</li>
          <li>Contact</li>
          <li>Lisence</li>
        </ul>
        <ul className="action">
          <li>
            <a href="https://github.com/lufy3qvietnam">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/duongcongvu93">
              <i class="fab fa-facebook-messenger"></i>
            </a>
          </li>
          <li>
            <div
              className={`switch-theme ${
                this.props.theme == 1 ? "active" : null
              }`}
              onClick={this.handleToogleTheme}
            >
              <div
                className={`circle ${this.props.theme == 1 ? "active" : null}`}
              ></div>
            </div>
          </li>
        </ul>
      </Row>
    );
  }
}
