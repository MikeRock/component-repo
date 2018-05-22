import { Component } from "react";
import PropTypes from "prop-types";
import _ from "./styles.scss";

export default class SimpleNav extends Component {
  render() {
    return (
      <ul className={_["nav__list"]}>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]}>
            <div className={_["nav__icon"]}>
              <i className="fa fa-camera-retro" />
              <i className="fa fa-camera-retro" />
            </div>
            <div className={_["nav__name"]} data-text="NAME">
              <span className={_["nav__name-inner"]}>NAME</span>
            </div>
          </a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]}>
            <div className={_["nav__icon"]}>
              <i className="fa fa-cog" />
              <i className="fa fa-cog" />
            </div>
            <div className={_["nav__name"]} data-text="NAME">
              <span className={_["nav__name-inner"]}>NAME</span>
            </div>
          </a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]}>
            {" "}
            <div className={_["nav__icon"]}>
              <i className="fa fa-camera-retro" />
              <i className="fa fa-camera-retro" />
            </div>
            <div className={_["nav__name"]} data-text="NAME">
              <span className={_["nav__name-inner"]}>NAME</span>
            </div>
          </a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]}>
            {" "}
            <div className={_["nav__icon"]}>
              <i className="fa fa-camera-retro" />
              <i className="fa fa-camera-retro" />
            </div>
            <div className={_["nav__name"]} data-text="NAME">
              <span className={_["nav__name-inner"]}>NAME</span>
            </div>
          </a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]}>
            {" "}
            <div className={_["nav__icon"]}>
              <i className="fa fa-camera-retro" />
              <i className="fa fa-camera-retro" />
            </div>
            <div className={_["nav__name"]} data-text="NAME">
              <span className={_["nav__name-inner"]}>NAME</span>
            </div>
          </a>
        </li>
      </ul>
    );
  }
}
