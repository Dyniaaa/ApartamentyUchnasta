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
  constructor(props) {
    super(props);
    this.state = {
      gallery1Loaded: false,
      gallery2Loaded: false,
    };
  }

  handleFirstGalleryLoad = () => {
    if (!this.state.gallery1Loaded) {
      this.setState({ gallery1Loaded: true });
    }
  };

  handleSecondGalleryLoad = () => {
    if (!this.state.gallery2Loaded) {
      this.setState({ gallery2Loaded: true });
    }
  };

  render() {
    const { gallery1Loaded, gallery2Loaded } = this.state;

    return (
      <div className="galleryBox">
        {!gallery1Loaded && <div class="loader"></div>}
        <div className={`gallery1container ${gallery1Loaded ? "visible" : "hidden"}`}>
          <div className="txtDiv">
            <span>APARTAMENT I</span>
            <p>
              Sypialnia z łóżkiem małżeńskim, salon z kanapą z możliwością
              spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z
              prysznicem. Apartament z balkonem wyposażony w stolik kawowy.
              Powierzchnia - 62 m².
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              Zadzwoń i spytaj o dostępność!
            </button>
          </div>

          <ImageGallery
            items={images1}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery1"}
            lazyLoad={true}
            onImageLoad={this.handleFirstGalleryLoad}
          />
        </div>

        {!gallery2Loaded && <div class="loader"></div>}
        <div className={`gallery2container ${gallery2Loaded ? "visible" : "hidden"}`}>
          <div className="txtDiv ndtxt">
            <span>APARTAMENT II</span>
            <p>
              Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w
              łózko małżeńskie, salon z kanapą z możliwością spania dla 2 osób.
              W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z 2
              balkonami. Powierzchnia - 68 m².
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              Zadzwoń i spytaj o dostępność!
            </button>
          </div>
          <ImageGallery
            items={images2}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery2"}
            onImageLoad={this.handleSecondGalleryLoad}
          />
        </div>
      </div>
    );
  }
}

export default MyGallery;
