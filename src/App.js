import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        {/*navbar, sidebar, cart, footer */}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
