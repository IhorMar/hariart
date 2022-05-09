import React, { useEffect, useState } from "react";
import PictureImg from "../../templates/frontend/images/no_image.png";
import "./Picture.css";

export default function Picture({ image }) {
    const [opened, setOpened] = useState(false);

  return (
      <div className="picture">
          <img className="picture-image" src={image || PictureImg} />
          <div className="picture-open"></div>
      </div>
  );
}
