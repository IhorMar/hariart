import React from "react";
import PictureImg from "../../templates/frontend/images/no_image.png";
import "./Picture.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Picture({ image }) {
  return (
    <div className="picture">
      <img className="picture-image" src={image || PictureImg} />
      <Gallery>
        <Item
          original={image || PictureImg}
          thumbnail={image || PictureImg}
          width="1600"
          height="1600"
        >
          {({ ref, open }) => (
            <div className="picture-open" ref={ref} onClick={open}></div>
          )}
        </Item>
      </Gallery>
    </div>
  );
}
