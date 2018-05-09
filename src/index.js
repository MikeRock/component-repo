import { Component } from "react";
import { SimpleCard, SimpleNav } from "./../components/index";
import ReactDOM from "react-dom";
import _ from "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className={_["container"]}>
        <SimpleNav />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
