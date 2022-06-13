import React, { useState, createRef } from "react";
import PictureImg from "../../../templates/frontend/images/no_image.png";
import "./Picture.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Picture({ image, increasable = true }) {
  const [zoom, setZoom] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const imageRef = createRef();

  const handleMouseMovement = (e) => {
    const {
      left: offsetLeft,
      top: offsetTop,
      height,
      width,
    } = imageRef.current.getBoundingClientRect();

    const x = ((e.pageX - offsetLeft) / parseInt(width, 10)) * 100;
    const y = ((e.clientY - offsetTop) * 100) / parseInt(height / 2, 10);

    setMouseX(x);
    setMouseY(y);
  };

  return (
    <div
      className="picture"
      onMouseOver={() => setZoom(true)}
      onMouseOut={() => setZoom(false)}
      onMouseMove={handleMouseMovement}
      ref={imageRef}
    >
      <div
        className={zoom ? "picture-increased" : "picture-image"}
        style={{
          transformOrigin:
            zoom &&
            `${mouseX > 0 ? mouseX : 0}% ${mouseY < 100 ? mouseY : 100}%`,
          backgroundImage: `url('${image || PictureImg}')`,
        }}
      />
      {increasable && (
        <Gallery>
          <Item
            original={image || PictureImg}
            thumbnail={image || PictureImg}
            width="1600"
            height="1600"
          >
            {({ ref, open }) => (
              <div className="picture-open" ref={ref} onClick={open} />
            )}
          </Item>
        </Gallery>
      )}
    </div>
  );
}
