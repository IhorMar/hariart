import React, { useEffect, useState } from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import LandscapesImg from "../../../templates/frontend/images/landscapes.jpg";
import PictureGroupHandler from "../../services/handlers/Picture_group";
import Pagination from "../pagination/Pagination";

export default function Landscapes() {
  const [pictures, setPictures] = useState();
  const onPageChange = (currentPage) =>
    PictureGroupHandler.getPictureGroup(
      { category: "landscapes", page: currentPage },
      setPictures
    );

  useEffect(() => {
    PictureGroupHandler.getPictureGroup({ category: "landscapes" }, setPictures);
  }, []);

  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo image={LandscapesImg} title="Landscapes" />
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
