import React, { useEffect, useState } from "react";
import "./Pagination.css";

export default function Pagination({ pagesAmount, currentPage = 1, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(currentPage);

  useEffect(() => setCurrentIndex(currentPage), [currentPage])

  useEffect(() => {
    onChange(currentIndex);
  }, [currentIndex]);

  return (
    <div className="pagination">
      {currentIndex > 1 && (
        <div
          className="arrow-left"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        ></div>
      )}
      {pagesAmount != 1 &&
        [...Array(pagesAmount)].map((x, i) => (
          <div
            key={i}
            className={"pagination__point".concat(
              currentIndex == i + 1 ? "--active" : ""
            )}
            onClick={() => {
              setCurrentIndex(i + 1);
            }}
          >
            {i + 1}
          </div>
        ))}
      {currentIndex < pagesAmount && (
        <div
          className="arrow-right"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        ></div>
      )}
    </div>
  );
}
