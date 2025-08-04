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

const images3 = [
  {
    original: "/GalleryPhotos/APT0.2/IMG_0374.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0374.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0521.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0521.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0490.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0490.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0384.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0384.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0455.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0455.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0444.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0444.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.2/IMG_0388.jpg",
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0388.jpg",
    thumbnailClass: "ThumbnailClass",
  },
];

const images4 = [
  {
    original: "/GalleryPhotos/APT0.1/IMG_1408.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1408.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1399.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1399.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1381.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1381.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1463.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1463.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1480.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1480.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1370.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1370.jpg",
    thumbnailClass: "ThumbnailClass",
  },
  {
    original: "/GalleryPhotos/APT0.1/IMG_1449.jpg",
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1449.jpg",
    thumbnailClass: "ThumbnailClass",
  },
];

class MyGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery1Loaded: false,
      gallery2Loaded: false,
      gallery3Loaded: false,
      gallery4Loaded: false,
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

  handleThirdGalleryLoad = () => {
    if (!this.state.gallery3Loaded) {
      this.setState({ gallery3Loaded: true });
    }
  };

  handleFourthGalleryLoad = () => {
    if (!this.state.gallery4Loaded) {
      this.setState({ gallery4Loaded: true });
    }
  };

  render() {
    const { gallery1Loaded, gallery2Loaded, gallery3Loaded, gallery4Loaded } = this.state;

    return (
      <div className="galleryBox">
         {!gallery3Loaded && <div className="loader"></div>}
        <div
          className={`galleryContainer ${
            gallery3Loaded ? "visible" : "hidden"
          }`}
        >
          <div className="txtDiv">
            <span>APARTAMENT&nbsp;I</span>
            <p>
              Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w
              łóżko małżeńskie, salon z kanapą z możliwością spania dla 1 osoby.
              W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament na parterze.
              Powierzchnia&nbsp;-&nbsp;32&nbsp;m².
            </p>
            <a href="tel:884875800">
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
            </a>
          </div>

          <ImageGallery
            items={images3}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery1"}
            lazyLoad={true}
            onImageLoad={this.handleThirdGalleryLoad}
          />
        </div>
        {!gallery1Loaded && <div className="loader"></div>}
        <div
          className={`galleryContainer ${
            gallery1Loaded ? "visible" : "hidden"
          }`}
        >
          <div className="txtDiv">
            <span>APARTAMENT&nbsp;II</span>
            <p>
              Sypialnia z łóżkiem małżeńskim, salon z kanapą z możliwością
              spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z
              prysznicem. Apartament z balkonem wyposażony w stolik kawowy.
              Powierzchnia&nbsp;-&nbsp;62&nbsp;m².
            </p>
            <a href="tel:884875800">
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
            </a>
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

        {!gallery2Loaded && <div className="loader"></div>}
        <div
          className={`galleryContainer ${
            gallery2Loaded ? "visible" : "hidden"
          }`}
        >
          <div className="txtDiv ndtxt">
            <span>APARTAMENT&nbsp;III</span>
            <p>
              Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w
              łóżko małżeńskie, salon z kanapą z możliwością spania dla 2 osób.
              W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z 2
              balkonami. Powierzchnia&nbsp;-&nbsp;68&nbsp;m².
            </p>
            <a href="tel:884875800">
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
            </a>
          </div>
          <ImageGallery
            items={images2}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery2"}
            onImageLoad={this.handleSecondGalleryLoad}
          />
        </div>
        {!gallery4Loaded && <div className="loader"></div>}
        <div
          className={`galleryContainer ${
            gallery4Loaded ? "visible" : "hidden"
          }`}
        >
          <div className="txtDiv">
            <span>STUDIO&nbsp;IV</span>
            <p>
              Studio z łóżkiem małżeńskim oraz w pełni wyposażonym aneksem kuchennym. Łazienka z
              prysznicem. Apartament na parterze.
              Powierzchnia&nbsp;-&nbsp;22&nbsp;m².
            </p>
            <a href="tel:884875800">
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
            </a>
          </div>

          <ImageGallery
            items={images4}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass={"gallery1"}
            lazyLoad={true}
            onImageLoad={this.handleFourthGalleryLoad}
          />
        </div>
      </div>
    );
  }
}

export default MyGallery;
