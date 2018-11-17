import { Component } from "react";
import _ from "./styles.scss";

export default class HorizontalAccordeon extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <nav id="navigation" className={`${_["main-navigation"]} ${_["horizontal"]}`}>
        <ul className={_["reset-list"]}>
          <li className={`${_["profile"]} ${_["active"]}`}>
            <span className={`${_["fa"]} fa fa-user`} tabIndex="1" data-toggle="main-nav" />
            <div className={_["wrapper"]}>
              <div className={_["inner"]}>
                <h2>Profile</h2>
                <ul className={`${_["reset-list"]} ${_["sub-nav"]}`}>
                  <li>
                    <a href="#">What we do</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={_["pictures"]}>
            <span className={`${_["fa"]} fa fa-camera`} tabIndex="2" data-toggle="main-nav" />
            <div className={_["wrapper"]}>
              <div className={_["inner"]}>
                <h2>Pictures</h2>
                <ul className={`${_["reset-list"]} ${_["sub-nav"]}`}>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Modules</a>
                  </li>
                  <li>
                    <a href="#">Galery</a>
                  </li>
                  <li>
                    <a href="#">Wallpapers</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={_["music"]}>
            <span className={`${_["fa"]} fa fa-music`} tabIndex="3" data-toggle="main-nav" />
            <div className={_["wrapper"]}>
              <div className={_["inner"]}>
                <h2>Music</h2>
                <ul className={`${_["reset-list"]} ${_["sub-nav"]}`}>
                  <li>
                    <a href="#">Playlist</a>
                  </li>
                  <li>
                    <a href="#">Discover</a>
                  </li>
                  <li>
                    <a href="#">Radio</a>
                  </li>
                  <li>
                    <a href="#">Genre</a>
                  </li>
                  <li>
                    <a href="#">Live</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={_["search"]}>
            <span className={`${_["fa"]} fa fa-search`} tabIndex="4" data-toggle="main-nav" />
            <div className={_["wrapper"]}>
              <div className={_["inner"]}>
                <fieldset className={_["quick-search"]}>
                  <legend>Search</legend>
                  <label htmlFor="qsearch">search</label>
                  <input type="text" name="search" id="qsearch" placeholder="Whats up dog?" />
                  <button type="button" className={`${_["btn"]} ${_["btn-search"]}`}>
                    <span className={`${_["fa"]} fa fa-search`} />
                  </button>
                </fieldset>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
