import React, { useEffect, useState } from "react";
import PictureGroupInfo from "../picture_group/Picture_group";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import WindowImg from "../../../templates/frontend/images/window-to-another-world.jpg";
import PictureGroupHandler from "../../services/handlers/Picture_group";
import Pagination from "../pagination/Pagination";

export default function WindowToAnotherWorld() {
  const [pictures, setPictures] = useState();
  const onPageChange = (currentPage) =>
    PictureGroupHandler.getPictureGroup(
      { category: "window_world", page: currentPage },
      setPictures
    );

  useEffect(() => {
    PictureGroupHandler.getPictureGroup(
      { category: "window_world" },
      setPictures
    );
  }, []);

  return (
    <>
      <div className="picture-group">
        <PictureGroupInfo
          image={WindowImg}
          title="Window to another world"
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
