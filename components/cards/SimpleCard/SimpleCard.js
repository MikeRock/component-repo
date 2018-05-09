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
      <div className={_["simple-card"]}>
        <div className={_["simple-card__header"]}>{this.props.header}</div>
        <div className={_["simple-card__body"]}>{this.props.body}</div>
        <div className={_["simple-card__footer"]}>{this.props.footer}</div>
      </div>
    );
  }
}
