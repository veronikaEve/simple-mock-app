import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <div className="App" data-testid="app">
      <NavigationBar />
      <div className="app-body">
        <Router>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
