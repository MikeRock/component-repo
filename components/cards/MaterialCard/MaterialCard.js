import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";
import { TweenMax, Cubic, Expo } from "gsap";

export default class MaterialCard extends Component {
  constructor(...args) {
    super(...args);
    this.state = { isSel: false };
    this.init = this.init.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.circle;
    this.exNum;
  }

  onEnter() {
    requestAnimationFrame(this.onEnter);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.fillStyle = this.circle.color;
    this.ctx.beginPath();
    this.ctx.arc(this.circle.x, this.circle.y, this.circle.radius, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.restore();
  }

  onClick(e) {
    if (!this.state.isSel) {
      this.setState({ isSel: true });
      TweenMax.to(this.title, 0.5, {
        opacity: 1,
        top: `32px`,
        delay: 0.15,
        ease: Cubic.easeOut
      });
      TweenMax.to(this.sub, 0.5, {
        opacity: 1,
        top: `133px`,
        delay: 0.25,
        ease: Cubic.easeOut
      });
      TweenMax.to(this.circle, 0.6, {
        radius: this.exNum,
        ease: Expo.easeOut
      });
      TweenMax.to(this.plus, 0.3, {
        opacity: 0,
        scale: 0,
        ease: Cubic.easeOut
      });
    } else {
      this.setState({ isSel: false });
      TweenMax.to(this.circle, 0.3, { radius: 38, ease: Expo.easeOut });
      TweenMax.to(this.title, 0.1, {
        opacity: 0,
        ease: Expo.easeOut,
        onComplete: () => {
          this.title.style.top = `42px`;
        }
      });
      TweenMax.to(this.sub, 0.1, {
        opacity: 0,
        ease: Expo.easeOut,
        onComplete: () => {
          this.sub.style.top = `163px`;
          this.sub.style.display = "none";
        }
      });
      TweenMax.to(this.plus, 0.2, {
        opacity: 1,
        scale: 1,
        delay: 0.2,
        ease: Cubic.easeOut
      });
    }
    this.onEnter();
  }

  init() {
    this.circle = { x: 311, y: 350, radius: 38, color: "#4b76d8" };
    this.exNum = 682;

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext("2d");
    }

    this.ctx.save();
    this.ctx.fillStyle = this.circle.color;
    this.ctx.beginPath();
    this.ctx.arc(this.circle.x, this.circle.y, this.circle.radius, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.restore();

    window.addEventListener("resize", this.onResize);
    this.onResize();
  }
  onResize() {
    this.container.style.left = (window.innerWidth - this.container.getBoundingClientRect().width) / 2 + "px";
    this.container.style.top = (window.innerHeight - this.container.getBoundingClientRect().height) / 2 + "px";
  }

  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <div ref={el => (this.container = el)} className={_["container"]}>
        <div className={_["img"]} />
        <div className={_["content"]}>
          <div className={_["name"]}>Mike Rock</div>
          <div className={_["description"]}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus cupiditate ipsa aliquid, repellat unde! Ipsam
              aut ab provident suscipit, ratione quis quod quos in consequatur mollitia nemo beatae! Laudantium.{" "}
            </p>
          </div>
        </div>
        <canvas ref={el => (this.canvas = el)} className={_["canvas"]} width="375" height="667" />
        <div ref={el => (this.plus = el)} className={_["plus"]}>
          <div className={`${_["h"]} ${_["rect"]}`} />
          <div className={`${_["v"]} ${_["rect"]}`} />
        </div>
        <div ref={el => (this.title = el)} className={_["title"]}>
          <img src="http://jjangik.com/canvas/title.png" alt="" width="313" height="20" />
        </div>
        <div
          ref={el => (this.button = el)}
          onClick={this.onClick}
          style={this.state.isSel ? { display: "none" } : { display: "block" }}
          className={_["button"]}>
          asd
        </div>
        <div
          ref={el => (this.close = el)}
          onClick={this.onClick}
          style={this.state.isSel ? { display: "block" } : { display: "none" }}
          className={_["close"]}
        />
        <div
          ref={el => (this.sub = el)}
          style={this.state.isSel ? { display: "block" } : { display: "none" }}
          className={_["sub"]}>
          <img src="http://jjangik.com/canvas/sub.png" alt="" width="311" height="484" />
        </div>
      </div>
    );
  }
}
