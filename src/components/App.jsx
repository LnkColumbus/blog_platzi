import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Users from "./Users";

const Tareas = () => <div>Tareas</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Route exact path="/" component={Users} />
        <Route exact path="/tareas" component={Tareas} />
      </div>
    </BrowserRouter>
  );
};

export default App;
