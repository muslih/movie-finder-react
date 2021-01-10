import * as React from "react";
import { Provider, atom, useAtom } from "jotai";
import { render } from "react-dom";
import Routes from "./Routes";

import "./App.scss";

const App = () => (
  <Provider>
    <Routes/>
  </Provider>
)

render(<App />, document.getElementById("app"));
