import React from "react";
import "./Picture_group.css";

export default function PictureGroupInfo({ image, title, description }) {
  return (
    <div className="picture-group-info">
      <img className="picture-group-info__image" src={image} alt="No image" />
      <div className="picture-group-info__header">
          <div className="picture-group-info__title">{title}</div>
          {description && <div className="picture-group-info__description">{description}</div>}
      </div>
    </div>
  );
}
