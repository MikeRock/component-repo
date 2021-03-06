import { Component } from "react";
import {
  SimpleCard,
  SimpleNav,
  SimpleForm,
  PopupCard,
  SimpleList,
  SimpleListItem,
  SlantedCard,
  SimpleSlider,
  HoverCard,
  MaterialCard,
  RippleButton,
  Cache,
  SimpleAccordeon,
  UpDownAccordeon,
  HorizontalAccordeon
} from "../components/index";
import ReactDOM from "react-dom";
import _ from "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className={_["container"]}>
        <HorizontalAccordeon />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
