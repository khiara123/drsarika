import React, { useState, useEffect } from "react";
import "./Gallery.css"; // You can also use styled-components or inline styles

const images = [
  {
    src: "/images/1.jpg",
    alt: "Image 1",
    caption: "Mental Health",
  },
  {
    src: "/images/2.jpg",
    alt: "Image 2",
    caption: "Behavioral Science",
  },
  {
    src: "/images/3.jpg",
    alt: "Image 3",
    caption: "Child & Adolescent Psychology",
  },
    {
    src: "/images/4.jpg",
    alt: "Image 4",
    caption: "Child & Adolescent Psychology",
  },
    {
    src: "/images/5.jpg",
    alt: "Image 5",
    caption: "Child & Adolescent Psychology",
  },
    {
    src: "/images/6.jpg",
    alt: "Image 6",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/7.jpg",
    alt: "Image 7",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/8.jpg",
    alt: "Image 8",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/9.jpg",
    alt: "Image 9",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/10.jpg",
    alt: "Image 10",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/11.jpg",
    alt: "Image 11",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/12.jpg",
    alt: "Image 12",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/13.jpg",
    alt: "Image 13",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/14.jpg",
    alt: "Image 14",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/15.jpg",
    alt: "Image 15",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/16.jpg",
    alt: "Image 16",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/17.jpg",
    alt: "Image 17",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/18.jpg",
    alt: "Image 18",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/19.jpg",
    alt: "Image 19",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/20.jpg",
    alt: "Image 20",
    caption: "Child & Adolescent Psychology",
  },
  {
    src: "/images/21.jpg",
    alt: "Image 21",
    caption: "Child & Adolescent Psychology",
  }
  // Add more images here...
];

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showPrev();
    else if (e.key === "ArrowRight") showNext();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <figure
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} />
            <figcaption>{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox"
          onClick={(e) =>
            e.target.classList.contains("lightbox") && closeLightbox()
          }
        >
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <button className="prev" onClick={showPrev}>
            &#10094;
          </button>
          <div className="lightbox-content-wrapper">
            <img
              className="lightbox-content"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
            <div className="caption">{images[currentIndex].caption}</div>
          </div>
          <button className="next" onClick={showNext}>
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
