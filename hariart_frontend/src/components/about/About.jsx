import React from "react";
import "./About.css";
import Footer from "../footer/Footer";

export default function About() {
  return (
    <>
      <div className="about">
        <iframe
          className="videoplayer"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/0-8DOpYoVO0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Hariart Adv"
        />
        <div className="about-text">
          <p>
            On this website, we are offering framed canvas painting of three
            different varieties, windows to the spiritual world, a variety of
            vedic art, and landscape pictures.
          </p>
          <p>
            Our primary collection is paintings from another world. Paintings of
            Krishna are like windows to the spiritual world; it means that
            through these paintings, we are looking into the ‘real world,’ which
            means that within seconds we can easily be transported from this
            world to the spiritual world. A world where every step is a dance
            and every word is a song. Where Radha and Krishna have
            transcendental pastimes that go on eternally.
          </p>
          <p>
            Just like Krishna is none different from His name, so when you chant
            the names of Krishna, He is present in that sound. In the same way,
            Krishna is non-different from His picture. Having a painting of
            Krishna in your front room would mean that He is personally present.
          </p>
          <p>
            In this world, everything has a beginning and an end, so why not
            transport yourself to another world. There is no need for a
            passport, visa, or the expense of a galactic travel fee. Bring
            Krishna to your home at an affordable price.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
