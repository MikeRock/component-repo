import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SimpleCard extends Component {
  constructor(...args) {
    super(...args);
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={_["card"]}>
        <div className={_["card__photo"]} />
        <ul className={_["card__social"]}>
          <li className={_["card__social-item"]}>
            <a className={_["card__social-link"]}>
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li className={_["card__social-item"]}>
            <a className={_["card__social-link"]}>
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li className={_["card__social-item"]}>
            <a className={_["card__social-link"]}>
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li className={_["card__social-item"]}>
            <a className={_["card__social-link"]}>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className={_["card__social-item"]}>
            <a className={_["card__social-link"]}>
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
        <div className={_["card__body"]}>
          <h1 className={_["card__body-header"]}>Sexy Asian &times;&times;&times;</h1>
          <p className={_["card__body-text"]}> Lirem Ipsum dolot</p>
        </div>
      </div>
    );
  }
}
