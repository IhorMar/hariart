import React from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import modular from "../../../templates/frontend/images/modular.jpg";

export default function Modular() {
  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo
          image={modular}
          title="Modular"
        />
        <div className="picture-group-cards">
          <Card
            image=""
            title="Title of picture"
          />
          <Card
            image=""
            title="Title of picture"
          />
          <Card
            image=""
            title="Title of picture"
          />
          <Card
            image=""
            title="Title of picture"
          />
          <Card
            image=""
            title="Title of picture"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}