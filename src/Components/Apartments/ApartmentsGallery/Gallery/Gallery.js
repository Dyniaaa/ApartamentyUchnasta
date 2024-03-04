import "./Gallery.scss";
import React, { useState } from "react";

const images = [
  "/GalleryPhotos/1.jpg",
  "/GalleryPhotos/2.jpg",
  "/GalleryPhotos/3.jpg",
  "/GalleryPhotos/4.jpg",
  "/GalleryPhotos/5.jpg",
  "/GalleryPhotos/6.jpg",
];
 
function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <section className="gallery">
      <p>Galeria</p>
      <div className="slider">
        <p onClick={handlePrevClick} className="arrowButton"></p>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + images[currentImage]}
            alt={`Zdjęcie ${currentImage + 1}`}
          />
        </div>
        <p onClick={handleNextClick} className="arrowButton"></p>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Miniatura ${index + 1}`}
            className={index === currentImage ? "active-thumbnail" : ""}
            onClick={() => setCurrentImage(index)}
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
