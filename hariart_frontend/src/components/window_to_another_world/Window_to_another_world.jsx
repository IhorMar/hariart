import React from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import window from "../../../templates/frontend/images/window-to-another-world.jpg";

export default function WindowToAnotherWorld() {
  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo
          image={window}
          title="Window to another world"
          description="Please note, if you see only one size, it means MAX size. It can be printed smaller, but not bigger."
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
