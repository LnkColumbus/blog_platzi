import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Users from "./Users";
import Posts from "./Posts";

const Tareas = () => <div>Tareas</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Route exact path="/" component={Users} />
        <Route exact path="/tareas" component={Tareas} />
        <Route exact path="/posts/:key" component={Posts} />
      </div>
    </BrowserRouter>
  );
};

export default App;
