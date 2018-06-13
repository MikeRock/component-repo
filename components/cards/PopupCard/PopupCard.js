import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class PopupCard extends Component {
  constructor(...args) {
    super(...args);
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={_["card"]}>
        <div className={_["card__photo"]} />
        <div className={_["card__body"]}>
          <h1 className={_["card__body-header"]}>HEADER</h1>
          <ul className={_["card__pills"]}>
            <li className={_["card__pill"]} data-type="genre1">
              Thriller
            </li>
            <li className={_["card__pill"]} data-type="genre2">
              Comedy
            </li>
            <li className={_["card__pill"]} data-type="genre3">
              Sci-fi
            </li>
            <li className={_["card__pill"]} data-type="genre4">
              Horror
            </li>
            <li className={_["card__pill"]} data-type="default">
              TV
            </li>
          </ul>
          <p className={_["card__body-text"]}>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ullam distinctio. Ipsa id architecto minima optio
            pariatur dolore soluta! Perspiciatis
          </p>
        </div>
      </div>
    );
  }
}
