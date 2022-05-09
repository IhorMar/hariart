import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WindowImg from "../../../templates/frontend/images/window-to-another-world.jpg";
import LandscapesImg from "../../../templates/frontend/images/landscapes.jpg";
import VedicArtImg from "../../../templates/frontend/images/vedic-art.jpg";
import ModularImg from "../../../templates/frontend/images/modular.jpg";
import PaintingsHandler from "../../services/handlers/Paintings";
import PictureGroup from "../picture_group/Picture_group";
import Footer from "../footer/Footer";
import { updatePage } from "../../reducers/Picture_group";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { updateUrlParam, getUrlParam } from "../../utils/URL";
import { useNavigate } from "react-router-dom";

const PictureGroupView = {
  window_world: {
    image: WindowImg,
    title: "Window to another world",
    description:
      "Please note, if you see only one size, it means MAX size. It can be printed smaller, but not bigger.",
  },
  landscapes: {
    image: LandscapesImg,
    title: "Landscapes",
  },

  vedic: {
    image: VedicArtImg,
    title: "Vedic art",
    description:
      "Please note, if you see only one size, it means MAX size. It can be printed smaller, but not bigger.",
  },
  modular: {
    image: ModularImg,
    title: "Modular",
  },
};

export default function PaintingsGroup({ category }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.picturesGroup);
  const [pictures, setPictures] = useState({});
  const getCurrentPage = () =>
    selected.paintingsGroup.find((data) => {
      return data.category == category;
    }) || {};

  const onPageChange = (page) => {
    updateUrlParam("page", page);
    PaintingsHandler.getPictureByParams(
      { category: category, page: page },
      setPictures
    );
  };

  const routeChange = (ref) =>{ 
    navigate(`/product/${ref}`);
  }

  useEffect(() => {
    const currentPage = getUrlParam("page") || getCurrentPage().page || 1;
    dispatch(updatePage({ category: category, page: currentPage }));
  }, [category]);

  useEffect(() => {
    const currentPage = getCurrentPage();
    currentPage.page && onPageChange(currentPage.page);
  }, [selected]);

  return (
    <>
      <div className="picture-group">
        <PictureGroup {...PictureGroupView[category]} />
        {pictures.results && (
          <>
            <Pagination
              pagesAmount={pictures.total_pages}
              currentPage={pictures.current_page}
              onChange={(currentPage) =>
                dispatch(updatePage({ category: category, page: currentPage }))
              }
            />
            <div className="picture-group-cards">
              {pictures.results.map((image, i) => (
                <Card key={i} image="" title={image.name} onClick={() => routeChange(image.ref)} />
              ))}
            </div>
            <Pagination
              pagesAmount={pictures.total_pages}
              currentPage={pictures.current_page}
              onChange={(currentPage) =>
                dispatch(updatePage({ category: category, page: currentPage }))
              }
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
