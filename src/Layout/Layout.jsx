import React, { Component } from "react";
import Carousel from "./Carousel";
import Laptop from "./Laptop";
import Navbar from "./Navbar";
import Promotion from "./Promotion";
import Smartphone from "./Smartphone";

export default class Layout extends Component {
  render() {
    return (
      <body body className="bg-dark">
        <Navbar />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Promotion />
      </body>
    );
  }
}
