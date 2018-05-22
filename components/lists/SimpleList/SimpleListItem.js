import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SimpleListItem extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showDetails: false, firstRender: true };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ firstRender: false });
    console.log("TADA");
  }
  _handleClick(e) {
    e.preventDefault();
    this.setState(prevState => {
      return { showDetails: !prevState.showDetails };
    });
    this.props._parentAction();
  }
  render() {
    return (
      <div
        onClick={this._handleClick}
        style={{ animationDelay: `${this.props._id * 0.05}s` }}
        className={`${_["list-item"]} ${
          this.state.showDetails ? _["list-item--details"] : ""
        }`}
      >
        <div className={_["list-item__image"]}>
          <div className={_["list-item__avatar"]} />
        </div>
        <div className={_["list-item__body"]}>
          <h3 className={_["list-item__header"]}>HEADER</h3>
          <h4 className={_["list-item__sub-header"]}>SUB</h4>
          <p className={_["list-item__content"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            fugiat veritatis sint unde! Consequatur quidem eum ex, ullam dolorem
            non sed esse iure
          </p>
        </div>
      </div>
    );
  }
}
