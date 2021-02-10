import React from "react";
import Footer from "../components/Footer";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";
import Game2 from "./Game2";

const Game1 = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Timer />
      <Switch>
        <Route exact path={path}>
          <h1>Choix de l'entrée</h1>
          <Select />
          <img />
          <Link to={`${url}/game2`}>Passer au choix du plat</Link>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <ProgresBar />
      <Footer />
    </div>
  );
};

function Topic() {
  return <Game2 />;
}
export default Game1;
