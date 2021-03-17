import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";


const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={CountryPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
