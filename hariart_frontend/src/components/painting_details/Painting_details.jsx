import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLastSegment } from "../../utils/URL";
import PaintingsHandler from "../../services/handlers/Paintings";
import Footer from "../footer/Footer";
import "./Painting_details.css";
import Picture from "../../picture/Picture";
import { useNavigate } from "react-router-dom";
import { addOrUpdateOrder } from "../../reducers/Orders";
import { useDispatch } from "react-redux";

export default function PaintingDetails() {
  const location = useLocation();
  const [picture, setPicture] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    PaintingsHandler.getPictureByParams(
      { ref: getLastSegment(location) },
      ({ results }) =>
        PaintingsHandler.getSizeOfPictureByRef(results[0].ref, (res) =>
          setPicture({
            ...results[0],
            size: `${res.results[0].height}x${res.results[0].width}`,
          })
        )
    );
  }, []);

  return (
    <>
      {picture && (
        <div className="painting-details">
          <div className="painting-details__header">
            <Picture />
            <div className="header__info">
              <div className="info">
                <div className="title">{picture.name}</div>
                <div className="size">{picture.size}</div>
              </div>
              <button className="button" onClick={() => {
                dispatch(addOrUpdateOrder(picture))
                navigate('/order')
              }}>Send request for the price</button>
            </div>
          </div>
          <div className="description">{picture.description}</div>
        </div>
      )}
      <Footer />
    </>
  );
}
