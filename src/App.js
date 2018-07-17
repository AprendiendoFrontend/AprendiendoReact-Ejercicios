import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Homepage from "./00-homepage/";
import Ex01 from "./01-props/";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <aside className="app-aside">
          <h3>Selecciona un ejercicio</h3>
          <Link to="/ex-01/demo">Trabajando con Props</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/ex-01/:type" component={Ex01} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
