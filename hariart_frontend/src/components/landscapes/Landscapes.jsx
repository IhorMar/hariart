import React from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import landscapes from "../../../templates/frontend/images/landscapes.jpg";

export default function Landscapes() {
  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo
          image={landscapes}
          title="Landscapes"
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