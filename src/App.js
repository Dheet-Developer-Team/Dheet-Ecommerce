import Header from "./sections/Header";
import "./App.css";
import FrontPage from "./sections/FrontPage";
import Category from "./components/Category";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "./actions/index";
import FooterPagePro from './sections/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {products.length ? <FrontPage products={products} /> : null}
          </Route>
          <Route exact path="/:category">
            <Category />
          </Route>
        </Switch>
        <FooterPagePro/>
      </div>
    </Router>
  );
}

export default App;
