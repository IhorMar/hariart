import React, { useEffect, useState } from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import VedicArtImg from "../../../templates/frontend/images/vedic-art.jpg";
import PictureGroupHandler from "../../services/handlers/Picture_group";
import Pagination from "../pagination/Pagination";

export default function VedicArt() {
  const [pictures, setPictures] = useState();
  const onPageChange = (currentPage) =>
    PictureGroupHandler.getPictureGroup(
      { category: "vedic", page: currentPage },
      setPictures
    );

  useEffect(() => {
    PictureGroupHandler.getPictureGroup({ category: "vedic" }, setPictures);
  }, []);

  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo
          image={VedicArtImg}
          title="Vedic art"
          description="Please note, if you see only one size, it means MAX size. It can be printed smaller, but not bigger."
        />
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
