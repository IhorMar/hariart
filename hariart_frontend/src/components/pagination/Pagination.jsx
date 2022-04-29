import React, { useEffect, useState } from "react";
import "./Pagination.css";

export default function Pagination({ pagesAmount, currentPage, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => setCurrentIndex(currentPage), [currentPage])

  useEffect(() => {
    currentIndex != currentPage && onChange(currentIndex);
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
