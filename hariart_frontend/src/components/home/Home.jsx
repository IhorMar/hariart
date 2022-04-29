import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").className = "home";
    return () => {
      document.querySelector("body").className = "";
    };
  }, []);

  return <div className="bottom-text">Beautiful Spiritual Canvas</div>;
}
