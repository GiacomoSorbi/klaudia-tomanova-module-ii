import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Login,
  About,
  Registration,
  ProductDetails,
} from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/login" exact component={Login} />
      <Route path="/about" exact component={About} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/shop/product-details" exact component={ProductDetails} />
      <Route
        path="*"
        render={() => (
          <img
            alt="404"
            src="https://kit8.net/images/thumbnails/580/386/detailed/4/Not_found_preview@2x.png"
          />
        )}
      />
    </Switch>
  );
}

export default App;
