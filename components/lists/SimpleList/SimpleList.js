import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SimpleList extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showDetails: false };
    this._toggleDetails = this._toggleDetails.bind(this);
  }
  _toggleDetails() {
    this.setState(prevState => {
      return { showDetails: !prevState.showDetails };
    });
  }
  render() {
    let { children } = this.props;
    let _children = React.Children.map(children, (child, id) =>
      React.cloneElement(child, {
        _parentAction: this._toggleDetails,
        _id: id + 1
      })
    );
    return (
      <div className={_["list"]}>
        <div className={`${_["list__container"]} ${this.state.showDetails ? _["list--details"] : ""}`}>{_children}</div>
      </div>
    );
  }
}
