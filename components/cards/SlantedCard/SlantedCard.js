import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SlantedCard extends Component {
    render() {
        return (
    <div className={_["card"]}>
        <div className={_["card-header"]}>
            <div className={_["card-header-bar"]}>
              <a href="#" className={_["btn-message"]}><span className={_["sr-only"]}>Message</span></a>
              <a href="#" className={_["btn-menu"]}><span className={_["sr-only"]}>Menu</span></a>
            </div>

            <div className={_["card-header-slanted-edge"]}>
                <div className={_["btn-activity"]}>Folow</div>
                <a href="#" className={_["btn-follow"]}><span className={_["sr-only"]}>Follow</span></a>
            </div>
        </div>

      <div className={_["card-body"]}>
          <h2 className={_["name"]}>John Smith</h2>
          <h4 className={_["job-title"]}>Product Designer</h4>
          <div className={_["bio"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam.</div>
          <div className={_["social-accounts"]}>
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt=""/><span className={_["sr-only"]}>Dribbble</span></a>
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg" alt=""/><span className={_["sr-only"]}>Twitter</span></a>
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg" alt=""/><span className={_["sr-only"]}>Instagram</span></a>
          </div>
      </div>

      <div className={_["card-footer"]}>
          <div className={_["stats"]}>
              <div className={_["stat"]}>
                <span className={_["label"]}>Following</span>
                <span className={_["value"]}>56K</span>
              </div>
              <div className={_["stat"]}>
                <span className={_["label"]}>Followers</span>
                <span className={_["value"]}>940</span>
              </div>
              <div className={_["stat"]}>
                <span className={_["label"]}>Likes</span>
                <span className={_["value"]}>320</span>
              </div>
          </div>
      </div>
  </div>
        )
    }
}