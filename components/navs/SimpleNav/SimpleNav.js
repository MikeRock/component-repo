import { Component } from "react";
import PropTyped from "prop-types";
import _ from "./styles.scss";

export default class SimpleNav extends Component {
  render() {
    return (
      <ul className={_["nav__list"]}>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]} >ITEM1</a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]} >ITEM2</a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]} >ITEM3</a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]} >ITEM4</a>
        </li>
        <li className={_["nav__item"]}>
          <a href="#" className={_["nav__link"]} >ITEM5</a>
        </li>
      </ul>
    );
  }
}
