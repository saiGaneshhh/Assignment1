import { useCarousel } from "../../hooks/useCarousel";
import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const { index, next, prev, setIndex } = useCarousel(items.length);
  const [isHovered, setIsHovered] = useState(false);

  // 🔁 Auto Scroll
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, items.length, setIndex]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="track"
        style={{ transform: `translateX(-${index * 304}px)` }}
      >
        {items.map((item, i) => (
          <div className="slide" key={i}>
            {item}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prev}>
        ←
      </button>
      <button className="arrow right" onClick={next}>
        →
      </button>

      {/* Dots */}
      {/* <div className="dots">
        {items.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "activeDot" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;