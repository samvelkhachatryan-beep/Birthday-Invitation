import React from "react";
import "./PhotoCollage.css";

const photos = [
  { src: "/images/IMG_2627.jpg", rotate: -8 },
  { src: "/images/IMG_2629.jpg", rotate: 5 },
  { src: "/images/IMG_2630.jpg", rotate: -3 },
  { src: "/images/IMG_2631.jpg", rotate: 0 },
  { src: "/images/IMG_2632.jpg", rotate: 6 },
  { src: "/images/IMG_2633.jpg", rotate: -5 },
  { src: "/images/IMG_2635.jpg", rotate: 4 },
  { src: "/images/IMG_2636.jpg", rotate: -6 },
  { src: "/images/IMG_2637.jpg", rotate: 7 },
];

const PhotoCollage = () => {
  return (
    <div className="photo-collage">
      <div className="collage-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="polaroid-card"
            style={{ "--rotate": `${photo.rotate}deg` }}
          >
            <div className="polaroid-inner">
              <img src={photo.src} alt={`Henry ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;
