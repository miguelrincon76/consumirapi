import React from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Cotizacion from "./components/Cotizacion";
import EditarCuadroCot from "./components/EditarCuadroCot";
import Presupuesto from "./components/Presupuesto";
import CuadroAPU from "./components/CuadroAPU";
import Materiales from "./components/Materiales";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Login {...props} />}
          ></Route>
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard {...props} />}
          ></Route>
          <Route
            path="/editarcuadro"
            exact
            render={(props) => <EditarCuadroCot {...props} />}
          ></Route>
          <Route
            path="/cotizacion"
            exact
            render={(props) => <Cotizacion {...props} />}
          ></Route>
          <Route
            path="/presupuesto"
            exact
            render={(props) => <Presupuesto {...props} />}
          ></Route>
          <Route
            path="/apu"
            exact
            render={(props) => <CuadroAPU {...props} />}
          ></Route>
          <Route
            path="/materiales"
            exact
            render={(props) => <Materiales {...props} />}
          ></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
