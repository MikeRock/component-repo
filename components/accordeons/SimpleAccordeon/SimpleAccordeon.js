import { Component } from "react";
import _ from "./styles.scss";
export default class SimpleAccordeon extends Component {
  constructor(...args) {
    super(...args);
    this.checkboxArr = [];
    this.state = { initial1: true, initial2: true, initial3: true, checked1: false, checked2: false, checked3: false };
  }
  componentDidMount() {
    this.checkboxArr.map((checkbox, index) => {
      checkbox.addEventListener("change", e => {
        if (this.state[`initial${index + 1}`]) this.setState({ [`initial${index + 1}`]: false });
        if (checkbox.checked) {
          this.setState({ [`checked${index + 1}`]: true });
        } else this.setState({ [`checked${index + 1}`]: false });
      });
    });
    console.log("MOUNTED");
  }
  render() {
    console.log("RENDERED");
    return (
      <div className={_["accordeon"]}>
        <div className={_["panel"]}>
          <div className={_["panel__heading"]}>
            <input
              ref={el => {
                this.checkboxArr.push(el);
              }}
              type="checkbox"
              className={_["accordeon__checkbox"]}
              id="checkbox1"
            />
            <label className={_["accordeon__label"]} htmlFor="checkbox1" />
            <div className={_["panel__name"]}>Item #1</div>
          </div>
          <div
            className={`${_["panel__body"]} ${
              this.state.checked1 ? _["accordeon--expanded"] : this.state.initial1 ? "" : _["accordeon--collapsed"]
            }`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatum laudantium aspernatur ad, ab ratione excepturi? In iste
            sequi impedit quidem, ea molestias corrupti vel iure nihil cumque. Unde, aspernatur.
          </div>
        </div>
        <div className={_["panel"]}>
          <div className={_["panel__heading"]}>
            <input
              ref={el => {
                this.checkboxArr.push(el);
              }}
              type="checkbox"
              className={_["accordeon__checkbox"]}
              id="checkbox2"
            />
            <label className={_["accordeon__label"]} htmlFor="checkbox2" />
            <div className={_["panel__name"]}>Item #2</div>
          </div>
          <div
            className={`${_["panel__body"]} ${
              this.state.checked2 ? _["accordeon--expanded"] : this.state.initial2 ? "" : _["accordeon--collapsed"]
            }`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatum laudantium aspernatur ad, ab ratione excepturi? In iste
            sequi impedit quidem, ea molestias corrupti vel iure nihil cumque. Unde, aspernatur.
          </div>
        </div>
        <div className={_["panel"]}>
          <div className={_["panel__heading"]}>
            <input
              ref={el => {
                this.checkboxArr.push(el);
              }}
              type="checkbox"
              className={_["accordeon__checkbox"]}
              id="checkbox3"
            />
            <label className={_["accordeon__label"]} htmlFor="checkbox3" />
            <div className={_["panel__name"]}>Item #3</div>
          </div>
          <div
            className={`${_["panel__body"]} ${
              this.state.checked3 ? _["accordeon--expanded"] : this.state.initial3 ? "" : _["accordeon--collapsed"]
            }`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatum laudantium aspernatur ad, ab ratione excepturi? In iste
            sequi impedit quidem, ea molestias corrupti vel iure nihil cumque. Unde, aspernatur.
          </div>
        </div>
      </div>
    );
  }
}
