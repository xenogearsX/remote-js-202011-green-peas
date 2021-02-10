import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Select from "../components/Select";
import Game3 from "./Game3";

const Game2 = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h1>Choix du plat</h1>
          <Select />
          <img alt='not yet' />
          <Link to={`${url}/game3`}>Passer au choix du dessert</Link>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {
  return <Game3 />
}
export default Game2;
