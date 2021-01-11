import * as React from "react";
import { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./components/Home";
import MovieDetail from "./components/MovieDetail";

type Props = { component: FunctionComponent } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/movies/:imdbid" component={MovieDetail} />
      <Route path="/movie-finder-react/" component={HomePage} />
      <Route path="/movie-finder-react/movies/:imdbid" component={MovieDetail} />
    </Router>
  );
};

export default Routes;
