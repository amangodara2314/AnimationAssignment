import React, { useEffect } from "react";
import "./SlideInList.css";

const SlideInList = () => {
  useEffect(() => {
    const slideInItems = document.querySelectorAll(".slide-in-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        } else {
          entry.target.classList.remove("slide-in");
        }
      });
    });

    slideInItems.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="slide-in-list">
      <div className="slide-in-item">
        <img src="/ghost.jpg" alt="Random" width={200} height={200} />
      </div>
      <div className="slide-in-item">
        <img src="/ghost.jpg" alt="Random" width={200} height={200} />
      </div>
      <div className="slide-in-item">
        <img src="/ghost.jpg" alt="Random" width={200} height={200} />
      </div>
    </div>
  );
};

export default SlideInList;
