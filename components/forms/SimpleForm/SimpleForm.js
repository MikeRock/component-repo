import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "./styles.scss";

export default class SimpleForm extends Component {
    render() {
        return (
            <div className={_["form"]}>
                <div className={_["form__avatar"]}></div>
                <div className={_["form__fields"]}>
                    <div className={_["form__field"]}>
                        <input type="text" className={_["form__input"]} id="username" />
                        <label htmlFor="username" className={_["form__input-label"]}>Username</label>
                    </div>
                    <div className={_["form__field"]}>
                        <input type="text" className={_["form__input"]} id="password" />
                        <label htmlFor="password" className={_["form__input-label"]}>Password</label>
                    </div>
                    <button className={_["form__submit"]}>Submit</button>
                </div>
            </div>
        )
    }
}