import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SimpleSlider extends Component {

constructor(...args) {
  super(...args)
  this.state = {two: false}
  this._handleChange = this._handleChange.bind(this)
}
_handleChange(e) {
  e.preventDefault;
this.setState({two: !this.state.two})
}
  render() {
    return (
      <div className={_["container"]}>
        <input type="radio" id={_["i1"]}  name="images" defaultChecked={true} />
        <input type="radio" id={_["i2"]} name="images" />
        <input type="radio" id={_["i3"]} name="images" />
        <input type="radio" id={_["i4"]} name="images" />

        <div className={_["slide_img"]} id={_["one"]}>
          <img src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

          <label className={_["prev"]} htmlFor={_["i4"]}>
            <span />
          </label>
          <label className={_["next"]} htmlFor={_["i2"]}>
            <span />
          </label>
        </div>

        <div className={ `${_["slide_img"]} ${ this.state.two ? _["show"] : "" }`} id={_["two"]}>
          <img src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

          <label className={_["prev"]} htmlFor={_["i1"]}>
            <span />
          </label>
          <label className={_["next"]} htmlFor={_["i3"]}>
            <span />
          </label>
        </div>

        <div className={_["slide_img"]} id={_["three"]}>
          <img src="https://images.pexels.com/photos/6035/healthy-apple-summer-garden.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

          <label className={_["prev"]} htmlFor={_["i2"]}>
            <span />
          </label>
          <label className={_["next"]} htmlFor={_["i4"]}>
            <span />
          </label>
        </div>

        <div className={_["slide_img"]} id={_["four"]}>
          <img src="https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

          <label className={_["prev"]} htmlFor={_["i3"]}>
            <span />
          </label>
          <label className={_["next"]} htmlFor={_["i1"]}>
            <span />
          </label>
        </div>

        <div className={_["nav_slide"]}>
          <label htmlFor={_["i1"]} className={`${_["dots"]} ${_["dot1"]}`}  />
          <label htmlFor={_["i2"]} className={`${_["dots"]} ${_["dot2"]}`}  />
          <label htmlFor={_["i3"]} className={`${_["dots"]} ${_["dot3"]}`}  />
          <label htmlFor={_["i4"]} className={`${_["dots"]} ${_["dot4"]}`}  />
        </div>
      </div>
    )
  }
}
