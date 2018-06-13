import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";
export default class HoverCard extends Component {
  constructor(...args) {
    super(...args);
    this.state = { mouseX: 0, mouseY: 0 };
    this.computeStyle = this.computeStyle.bind(this);
    this.computeBGStyle = this.computeBGStyle.bind(this);
    this.computePerspective = this.computePerspective.bind(this);
  }
  computeStyle() {
    const rX = this.state.mouseX / this.width * -20;
    const rY = this.state.mouseY / this.height * 20;
    return { transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
  }
  computeBGStyle() {
    const tX = this.state.mouseX / this.width * -40;
    const tY = this.state.mouseY / this.height * -40;
    return { transform: `translateX(${tX}px) translateY(${tY}px)` };
  }
  computePerspective() {
    const tZ = Math.max(this.state.mouseX / this.width, this.state.mouseY / this.height) * 40 + 30;
    return { transform: `perspective(800px) translateZ(${tZ}px)` };
  }
  componentDidMount() {
    this.width = this.refCard.offsetWidth;
    this.height = this.refCard.offsetHeight;
    this.refCard.addEventListener("mousemove", e => {
      e.preventDefault();
      e.stopPropagation();
      this.mouseX = e.pageX - this.refCard.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.refCard.offsetTop - this.height / 2;
      this.setState({ mouseX: this.mouseX, mouseY: this.mouseY });
    });
    this.refCard.addEventListener("mouseleave", e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ mouseX: 0, mouseY: 0 });
    });
  }
  render() {
    const style = this.computeStyle();
    const styleBG = this.computeBGStyle();
    const styleZ = this.computePerspective();

    return (
      <div className={_["card-wrap"]} style={styleZ}>
        <div className={_["card"]} style={style} ref={el => (this.refCard = el)}>
          <div className={_["card-bg"]} style={styleBG} />
          <div className={_["card-info"]}>
            <h1>Header</h1>
            <p>Content</p>
          </div>
        </div>
      </div>
    );
  }
}
