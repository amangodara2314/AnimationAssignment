import React from "react";
import "./FadeInComponent.css";

const FadeInComponent = () => {
  return (
    <div className="container">
      <div className="fade-in-text fade-in-left">
        <h2>Smooth Fade-In Animation</h2>
        <p>This component fades in smoothly when it enters the screen.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
          fugiat, quae aperiam architecto beatae dolore laboriosam itaque
          temporibus eveniet in eos nostrum veniam quas, tenetur dolores odit
          libero ullam quibusdam sed voluptate similique neque ipsa voluptas?
          Voluptatem temporibus non dicta.
        </p>
      </div>
      <img
        src="/ghost.jpg"
        alt="Random"
        className="fade-in-image fade-in-right"
      />
    </div>
  );
};

export default FadeInComponent;
