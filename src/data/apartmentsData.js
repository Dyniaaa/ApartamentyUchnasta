// Dane apartamentów

export const apartmentsData = [
  {
    id: "apt-0-1",
    name: "0.1",
    title: "Studio Apartament 0.1",
    shortDescription:
      "Studio z łóżkiem małżeńskim oraz w pełni wyposażonym aneksem kuchennym.",
    fullDescription:
      "Studio z łóżkiem małżeńskim oraz w pełni wyposażonym aneksem kuchennym. Łazienka z prysznicem. Apartament na parterze.",
    surface: "22 m²",
    floor: "Parter",
    capacity: 2,
    rooms: {
      bedrooms: 0,
      bathrooms: 1,
      kitchen: true,
    },
    features: [
      "Łóżko małżeńskie",
      "Aneks kuchenny",
      "Łazienka z prysznicem",
      "Na parterze",
    ],
    images: [
      "/GalleryPhotos/APT0.1/IMG_1408.jpg",
      "/GalleryPhotos/APT0.1/IMG_1399.jpg",
      "/GalleryPhotos/APT0.1/IMG_1381.jpg",
      "/GalleryPhotos/APT0.1/IMG_1463.jpg",
      "/GalleryPhotos/APT0.1/IMG_1480.jpg",
      "/GalleryPhotos/APT0.1/IMG_1370.jpg",
      "/GalleryPhotos/APT0.1/IMG_1449.jpg",
    ],
    thumbnail: "/GalleryPhotos/APT0.1/IMG_1408.jpg",
  },
  {
    id: "apt-0-2",
    name: "0.2",
    title: "Apartament 0.2",
    shortDescription:
      "Sypialnia z 2 łóżkami pojedynczymi, salon z kanapą z możliwością spania.",
    fullDescription:
      "Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w łóżko małżeńskie, salon z kanapą z możliwością spania dla 1 osoby. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament na parterze.",
    surface: "32 m²",
    floor: "Parter",
    capacity: 3,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
      kitchen: true,
    },
    features: [
      "2 łóżka pojedyncze (możliwość połączenia)",
      "Kanapa z funkcją spania",
      "W pełni wyposażona kuchnia",
      "Łazienka z prysznicem",
      "Na parterze",
    ],
    images: [
      "/GalleryPhotos/APT0.2/IMG_0374.jpg",
      "/GalleryPhotos/APT0.2/IMG_0521.jpg",
      "/GalleryPhotos/APT0.2/IMG_0490.jpg",
      "/GalleryPhotos/APT0.2/IMG_0384.jpg",
      "/GalleryPhotos/APT0.2/IMG_0455.jpg",
      "/GalleryPhotos/APT0.2/IMG_0444.jpg",
      "/GalleryPhotos/APT0.2/IMG_0388.jpg",
    ],
    thumbnail: "/GalleryPhotos/APT0.2/IMG_0374.jpg",
  },
  {
    id: "apt-1-1",
    name: "1.1",
    title: "Apartament 1.1",
    shortDescription:
      "Sypialnia z łóżkiem małżeńskim, salon z kanapą, balkon z widokiem.",
    fullDescription:
      "Sypialnia z łóżkiem małżeńskim, salon z kanapą z możliwością spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z balkonem wyposażony w stolik kawowy.",
    surface: "62 m²",
    floor: "Piętro 1",
    capacity: 4,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
      kitchen: true,
    },
    features: [
      "Łóżko małżeńskie",
      "Kanapa z funkcją spania (2 osoby)",
      "W pełni wyposażona kuchnia",
      "Łazienka z prysznicem",
      "Balkon ze stolikiem kawowym",
    ],
    images: [
      "/GalleryPhotos/APT1.1/1.Sypialnia1.jpg",
      "/GalleryPhotos/APT1.1/3.Salon1.jpg",
      "/GalleryPhotos/APT1.1/4.Salon2.jpg",
      "/GalleryPhotos/APT1.1/5.Łazienka.jpeg",
      "/GalleryPhotos/APT1.1/6.Kuchnia1.jpg",
    ],
    thumbnail: "/GalleryPhotos/APT1.1/1.Sypialnia1.jpg",
  },
  {
    id: "apt-2-1",
    name: "2.1",
    title: "Apartament 2.1",
    shortDescription: "Przestronny apartament z 2 balkonami i widokiem.",
    fullDescription:
      "Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w łóżko małżeńskie, salon z kanapą z możliwością spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z 2 balkonami.",
    surface: "68 m²",
    floor: "Piętro 2",
    capacity: 4,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
      kitchen: true,
    },
    features: [
      "2 łóżka pojedyncze (możliwość połączenia)",
      "Kanapa z funkcją spania (2 osoby)",
      "W pełni wyposażona kuchnia",
      "Łazienka z prysznicem",
      "2 balkony",
    ],
    images: [
      "/GalleryPhotos/APT2.1/1.Kuchnia1.jpg",
      "/GalleryPhotos/APT2.1/2.Kuchnia2.jpg",
      "/GalleryPhotos/APT2.1/3.Korytarz.jpg",
      "/GalleryPhotos/APT2.1/4.Salon1.jpg",
      "/GalleryPhotos/APT2.1/5.Salon2.jpg",
      "/GalleryPhotos/APT2.1/6.Łazienka1.JPEG",
      "/GalleryPhotos/APT2.1/7.Łazienka2.JPEG",
      "/GalleryPhotos/APT2.1/8.Sypialnia1.jpg",
      "/GalleryPhotos/APT2.1/9.Sypialnia2.jpg",
    ],
    thumbnail: "/GalleryPhotos/APT2.1/1.Kuchnia1.jpg",
  },
];

export const getApartmentById = (id) => {
  return apartmentsData.find((apt) => apt.id === id);
};

export const getAllApartments = () => {
  return apartmentsData;
};
