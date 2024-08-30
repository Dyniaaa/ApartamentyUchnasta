import "./Gallery.scss";
import React from "react";

import ImageGallery from "react-image-gallery";

const images1 = [
  {
    original: "/GalleryPhotos/APT1.1/1.Sypialnia1.jpg",
    thumbnail: "/GalleryPhotos/APT1.1/1.Sypialnia1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT1.1/3.Salon1.jpg",
    thumbnail: "/GalleryPhotos/APT1.1/3.Salon1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT1.1/4.Salon2.jpg",
    thumbnail: "/GalleryPhotos/APT1.1/4.Salon2.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT1.1/5.Łazienka.jpeg",
    thumbnail: "/GalleryPhotos/APT1.1/5.Łazienka.jpeg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT1.1/6.Kuchnia1.jpg",
    thumbnail: "/GalleryPhotos/APT1.1/6.Kuchnia1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
];

const images2 = [
  {
    original: "/GalleryPhotos/APT2.1/1.Kuchnia1.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/1.Kuchnia1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/2.Kuchnia2.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/2.Kuchnia2.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/3.Korytarz.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/3.Korytarz.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/4.Salon1.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/4.Salon1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/5.Salon2.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/5.Salon2.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/6.Łazienka1.JPEG",
    thumbnail: "/GalleryPhotos/APT2.1/6.Łazienka1.JPEG",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/7.Łazienka2.JPEG",
    thumbnail: "/GalleryPhotos/APT2.1/7.Łazienka2.JPEG",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/8.Sypialnia1.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/8.Sypialnia1.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT2.1/9.Sypialnia2.jpg",
    thumbnail: "/GalleryPhotos/APT2.1/9.Sypialnia2.jpg",
    thumbnailClass: "ThumbnailClass",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <div className="galleryBox">
        <h2>Apartamenty</h2>
        <div>
          <ImageGallery
            items={images1}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery1"}
          />
        </div>
        <div>
          <h3>Apartament 2.1</h3>
          <ImageGallery
            items={images2}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery2"}
          />
        </div>
      </div>
    );
  }
}

export default MyGallery;
