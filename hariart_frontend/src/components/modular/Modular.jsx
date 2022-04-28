import React, { useEffect, useState } from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import ModularImg from "../../../templates/frontend/images/modular.jpg";
import PictureGroupHandler from "../../services/handlers/Picture_group";
import Pagination from "../pagination/Pagination";

export default function Modular() {
  const [pictures, setPictures] = useState();
  const onPageChange = (currentPage) =>
    PictureGroupHandler.getPictureGroup(
      { category: "modular", page: currentPage },
      setPictures
    );

  useEffect(() => {
    PictureGroupHandler.getPictureGroup({ category: "modular" }, setPictures);
  }, []);

  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo image={ModularImg} title="Modular" />
        {pictures && (
          <>
            <Pagination
              pagesAmount={pictures.total_pages}
              currentPage={pictures.current_page}
              onChange={(props) => onPageChange(props)}
            />
            <div className="picture-group-cards">
              {pictures.results.map((image, i) => (
                <Card key={i} image="" title={image.name} />
              ))}
            </div>
            <Pagination
              pagesAmount={pictures.total_pages}
              currentPage={pictures.current_page}
              onChange={(props) => onPageChange(props)}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
