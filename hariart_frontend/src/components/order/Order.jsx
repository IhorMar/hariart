import React from "react";
import "./Order.css";
import Footer from "../footer/Footer";

export default function Order() {
  return (
    <>
      <div className="order">
        <p className="order__text">
          Hari Art site offers you beautiful canvas pictures printing in large
          digital format.&nbsp;Choose a picture you want to order, go to menu{" "}
          <strong>order </strong>and click the button{" "}
          <strong>request for the price</strong> fill the form and we will
          contact you.
        </p>
      </div>
      <Footer />
    </>
  );
}
