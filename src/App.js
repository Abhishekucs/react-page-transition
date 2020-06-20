import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Customize from "./components/Customize";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/customize" component={Customize} />
      </Switch>
    </AnimatePresence>
  );
};
export default App;
