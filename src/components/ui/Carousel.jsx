import { useCarousel } from "../../hooks/useCarousel";
import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [itemsPerView, setItemsPerView] = useState(3);

  const { index, next, prev, setIndex } = useCarousel(items.length);

  const [isHovered, setIsHovered] = useState(false);

  // ✅ Responsive logic
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  // 🔁 Auto scroll
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, items.length, setIndex]);

  // ✅ Correct translate calculation
  const translateX = (index * 100) / itemsPerView;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="track"
        style={{
          transform: `translateX(-${translateX}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
            className="slide"
            key={i}
            style={{ flex: `0 0 ${100 / itemsPerView}%` }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrowWrapper">
        <button className="arrow" onClick={prev}>←</button>
        <button className="arrow" onClick={next}>→</button>
      </div>
    </div>
  );
};

export default Carousel;
