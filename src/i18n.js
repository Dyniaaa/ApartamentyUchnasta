import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pl: {
    translation: {
      // Menu
      "menu.home": "Strona Główna",
      "menu.apartments": "Apartamenty",
      "menu.allApartments": "Wszystkie apartamenty",
      "menu.apartment": "Apartament",
      "menu.attractions": "Atrakcje",
      "menu.contact": "Kontakt",

      // Main Page
      "main.beMyGuest": "Be my guest",
      "main.tagline": "Czuj się jak w domu, z daleka od domu",

      // Apartments Section
      "apartments.title": "Apartamenty Uchnasta",
      "apartments.description":
        "Zapraszamy do naszego pensjonatu w Busku-Zdroju, słynnym uzdrowiskowym mieście położonym w malowniczym otoczeniu. Oferujemy komfortowy wypoczynek i relaks w pobliżu słynnej buskiej teżni solankowej.",
      "apartments.ourApartments": "Nasze Apartamenty",
      "apartments.ourApartmentsDesc":
        "Oferujemy w pełni wyposażone apartamenty w Busku-Zdroju, blisko tężni solankowych, z dostępem do naszego zielonego podwórka, grilla i parkingu.",
      "apartments.seeDetails": "Zobacz szczegóły",
      "apartments.seeMore": "Zobacz więcej",
      "apartments.guests": "osoby",
      "apartments.surface": "Powierzchnia",
      "apartments.capacity": "Pojemność",
      "apartments.floor": "Piętro",
      "apartments.features": "Udogodnienia",
      "apartments.chooseIdeal":
        "Wybierz idealny apartament dla siebie i swoich bliskich",
      "apartments.generalInfo": "Informacje ogólne",
      "apartments.checkInTime": "od 15:00",
      "apartments.checkOutTime": "do 11:00",
      "apartments.freeParkingInPrice": "Bezpłatny parking w cenie",
      "apartments.about": "O apartamencie",
      "apartments.booking": "Rezerwacja",
      "apartments.bookingDesc": "Skontaktuj się z nami i zarezerwuj swój pobyt",
      "apartments.needFlexible":
        "Potrzebujesz elastycznych godzin? Skontaktuj się z nami – chętnie dostosujemy się do Twoich potrzeb!",
      "apartments.upTo": "Do",
      "apartments.persons": "osób",
      "apartments.facilities": "Udogodnienia",

      // Location/Map
      "location.idealPlace":
        "Nasz apartament to idealne miejsce dla wszystkich, którzy cenią sobie wygodę i świetną lokalizację. Znajduje się on w sercu miasta, zaledwie kilka kroków od urokliwej tężni, która zapewnia doskonałe warunki do relaksu i odprężenia. Spacerując po okolicy, natrafisz na malownicze parki, idealne na spacery i pikniki, oraz urokliwą aleje Mickiewicza, która zachęca do wieczornych przechadzek. Ponadto, liczne sklepy i restauracje są tuż obok, co sprawia, że wszystko, czego potrzebujesz, znajduje się w zasięgu ręki. Nasz apartament to prawdziwy raj dla tych, którzy cenią sobie dostęp do atrakcji i udogodnień, jednocześnie zachowując spokój i ciszę miejsca. Zapraszamy do naszego wyjątkowego zakątka!",

      // Facilities
      "facilities.smartTv": "SmartTv",
      "facilities.internet": "Internet",
      "facilities.coffeemaker": "Ekspres",
      "facilities.garden": "Ogród",
      "facilities.grill": "Grill",
      "facilities.towels": "Ręczniki",
      "facilities.iron": "Żelazko",
      "facilities.washingMachine": "Pralka",
      "facilities.cosmeticsSet": "Zestaw kosmetyków",
      "facilities.console": "Konsola",
      "facilities.fridge": "Lodówka",
      "facilities.freeParking": "Darmowy parking",
      "facilities.coffeeTea": "Kawa i herbata",
      "facilities.dishwasher": "Zmywarka",
      "facilities.dryer": "Suszarka",

      // Apartment Descriptions
      "apt01.shortDescription":
        "Studio z łóżkiem małżeńskim oraz w pełni wyposażonym aneksem kuchennym.",
      "apt01.fullDescription":
        "Studio z łóżkiem małżeńskim oraz w pełni wyposażonym aneksem kuchennym. Łazienka z prysznicem. Apartament na parterze.",
      "apt02.shortDescription":
        "Sypialnia z 2 łóżkami pojedynczymi, salon z kanapą z możliwością spania.",
      "apt02.fullDescription":
        "Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w łóżko małżeńskie, salon z kanapą z możliwością spania dla 1 osoby. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament na parterze.",
      "apt11.shortDescription":
        "Sypialnia z łóżkiem małżeńskim, salon z kanapą, balkon z widokiem.",
      "apt11.fullDescription":
        "Sypialnia z łóżkiem małżeńskim, salon z kanapą z możliwością spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z balkonem wyposażony w stolik kawowy.",
      "apt21.shortDescription":
        "Przestronny apartament z 2 balkonami i widokiem.",
      "apt21.fullDescription":
        "Sypialnia z 2 łóżkami pojedynczymi z możliwością połączenia w łóżko małżeńskie, salon z kanapą z możliwością spania dla 2 osób. W pełni wyposażona kuchnia. Łazienka z prysznicem. Apartament z 2 balkonami.",

      // Floor
      "floor.groundFloor": "Parter",
      "floor.floor1": "Piętro 1",
      "floor.floor2": "Piętro 2",

      // Apartment Detail
      "apartmentDetail.backToList": "Powrót do listy apartamentów",
      "apartmentDetail.description": "Opis",
      "apartmentDetail.booking": "Rezerwacja",
      "apartmentDetail.contactUs": "Skontaktuj się z nami",
      "apartmentDetail.checkIn": "Zameldowanie",
      "apartmentDetail.checkOut": "Wymeldowanie",
      "apartmentDetail.flexibleHours":
        "Elastyczne godziny zameldowania i wymeldowania",
      "apartmentDetail.facilities": "Wyposażenie",

      // Attractions
      "attractions.busko": "BUSKO - ZDRÓJ",
      "attractions.graduationTower": "Tężnia",
      "attractions.graduationTowerDesc":
        "Tężnia w Busku-Zdroju to nowoczesny ośrodek uzdrowiskowy, oferujący inhalacje solankowe dla poprawy zdrowia i samopoczucia. Zainspirowana tradycyjnymi tężniami uzdrowiskowymi, tężnia w Busku-Zdroju wykorzystuje bogactwo mikroelementów, takich jak jod i brom, aby stworzyć korzystne warunki do regeneracji i relaksu. Ta harmonijna przestrzeń łączy w sobie naturalne metody leczenia z nowoczesnym podejściem do wellness, przyciągając zarówno turystów, jak i mieszkańców, którzy pragną korzystać z dobroczynnych efektów tężni w spokojnym i urokliwym otoczeniu.",
      "attractions.alley": "Deptak Mickiewicza",
      "attractions.alleyTitle": "Aleja Mickiewicza",
      "attractions.alleyDesc":
        "Aleja Mickiewicza w Busku-Zdroju to zielona, malownicza promenada, będąca sercem miasta i ulubionym miejscem spacerów. Otoczona zabytkowymi budynkami i urokliwymi kawiarniami, oferuje wyjątkową mieszankę kultury, historii i przyrody, tworząc atmosferę relaksu w samym centrum Buska-Zdroju.",
      "attractions.marconi": "Sanatorium Marconi",
      "attractions.marconiDesc":
        "Sanatorium Marconi w Busku-Zdroju jest renomowanym ośrodkiem zdrowia i rehabilitacji, specjalizującym się w kompleksowej opiece medycznej i terapeutycznej. Znane ze swojego wysokiego standardu usług medycznych, sanatorium oferuje nowoczesne metody leczenia i kompleksowe programy rehabilitacyjne dla pacjentów z różnorodnymi schorzeniami. Wyposażone w zaawansowany sprzęt medyczny oraz zespół doświadczonych specjalistów, Sanatorium Marconi zapewnia kompleksową opiekę, od diagnostyki i terapii po opiekę pooperacyjną. Otoczone malowniczym krajobrazem Buska-Zdroju, sanatorium jest również miejscem, gdzie pacjenci mogą cieszyć się spokojem i harmonią podczas rekonwalescencji.",
      "attractions.natureReserve": "Rezerwat Zimne Wody",
      "attractions.natureReserveDesc":
        "Rezerwat Zimne Wody w Busku-Zdroju to malownicza oaza przyrody, ceniona za unikalne walory przyrodnicze i lecznicze wody mineralne. Przebiegające przez bujne lasy ścieżki spacerowe prowadzą nad malownicze strumienie, tworząc idealne warunki do wypoczynku i obcowania z naturą. To miejsce, gdzie miłośnicy przyrody mogą odkrywać rzadkie gatunki flory i fauny oraz cieszyć się spokojem i pięknem otaczającego świata.",
      "attractions.buskoland": "BuskoLand",
      "attractions.buskolandDesc":
        "Buskoland w Busku-Zdroju to rodzinny park rozrywki, który oferuje szeroką gamę atrakcji dla dzieci i dorosłych. Znajdziesz tu nowoczesne place zabaw z kolorowymi zjeżdżalniami, trampolinami i innymi urządzeniami, które zapewniają dzieciom bezpieczną i radosną zabawę. Rodzice mogą odpocząć w specjalnych strefach relaksu, ciesząc się komfortem i spokojem, podczas gdy ich pociechy bawią się w pobliżu. Buskoland to idealne miejsce na aktywny wypoczynek na świeżym powietrzu.",

      // Contact
      "contact.title": "Contact Us",
      "contact.askUs": "Zapytaj o szczegóły",
      "contact.name": "Imię",
      "contact.email": "Email",
      "contact.message": "Wiadomość",
      "contact.send": "Wyślij",
      "contact.successMessage": "Wiadomość została wysłana pomyślnie!",
      "contact.errorMessage":
        "Wystąpił błąd podczas wysyłania wiadomości. Skontaktuj się telefonicznie lub spróbuj jeszcze raz",
      "contact.howToGetHere": "Jak dotrzeć",
      "contact.thankYou": "Dziękujemy za wiadomość!",
      "contact.error": "Wystąpił błąd. Spróbuj ponownie.",

      // Info Box
      "info.title": "Twoje wyjątkowe miejsce na wypoczynek",
      "info.comfort": "Komfort",
      "info.comfortDesc":
        "Nowoczesne apartamenty z pełnym wyposażeniem i klimatyzacją",
      "info.location": "Lokalizacja",
      "info.locationDesc": "Blisko tężni solankowych i centrum uzdrowiskowego",
      "info.parking": "Parking",
      "info.parkingDesc": "Bezpłatny parking dla wszystkich gości",
      "info.garden": "Ogród",
      "info.gardenDesc": "Dostęp do zielonego podwórka z miejscem na grilla",

      // Footer
      "footer.goToContactForm": "Przejść do Formularza Kontaktowego",
    },
  },
  en: {
    translation: {
      // Menu
      "menu.home": "Home",
      "menu.apartments": "Apartments",
      "menu.allApartments": "All apartments",
      "menu.apartment": "Apartment",
      "menu.attractions": "Attractions",
      "menu.contact": "Contact",

      // Main Page
      "main.beMyGuest": "Be my guest",
      "main.tagline": "Feel at home, away from home",

      // Apartments Section
      "apartments.title": "Apartments Uchnasta",
      "apartments.description":
        "Welcome to our guesthouse in Busko-Zdrój, a famous spa town located in picturesque surroundings. We offer a comfortable rest and relaxation near the famous Busko graduation tower.",
      "apartments.ourApartments": "Our Apartments",
      "apartments.ourApartmentsDesc":
        "We offer fully equipped apartments in Busko-Zdrój, close to graduation towers, with access to our green courtyard, barbecue and parking.",
      "apartments.seeDetails": "See details",
      "apartments.seeMore": "See more",
      "apartments.guests": "guests",
      "apartments.surface": "Surface",
      "apartments.capacity": "Capacity",
      "apartments.floor": "Floor",
      "apartments.features": "Features",
      "apartments.chooseIdeal":
        "Choose the perfect apartment for you and your loved ones",
      "apartments.generalInfo": "General Information",
      "apartments.checkInTime": "from 3:00 PM",
      "apartments.checkOutTime": "until 11:00 AM",
      "apartments.freeParkingInPrice": "Free parking included",
      "apartments.about": "About apartment",
      "apartments.booking": "Booking",
      "apartments.bookingDesc": "Contact us and book your stay",
      "apartments.needFlexible":
        "Need flexible hours? Contact us – we'll be happy to accommodate your needs!",
      "apartments.upTo": "Up to",
      "apartments.persons": "persons",
      "apartments.facilities": "Facilities",

      // Location/Map
      "location.idealPlace":
        "Our apartment is the perfect place for all those who value comfort and great location. It is located in the heart of the city, just a few steps from the charming graduation tower, which provides excellent conditions for relaxation. Walking around the area, you will come across picturesque parks, perfect for walks and picnics, and the charming Mickiewicz Avenue, which encourages evening strolls. Moreover, numerous shops and restaurants are right next door, which means that everything you need is within reach. Our apartment is a true paradise for those who value access to attractions and amenities, while maintaining the peace and quiet of the place. Welcome to our unique corner!",

      // Facilities
      "facilities.smartTv": "SmartTV",
      "facilities.internet": "Internet",
      "facilities.coffeemaker": "Coffee Maker",
      "facilities.garden": "Garden",
      "facilities.grill": "BBQ Grill",
      "facilities.towels": "Towels",
      "facilities.iron": "Iron",
      "facilities.washingMachine": "Washing Machine",
      "facilities.cosmeticsSet": "Cosmetics Set",
      "facilities.console": "Game Console",
      "facilities.fridge": "Fridge",
      "facilities.freeParking": "Free Parking",
      "facilities.coffeeTea": "Coffee and Tea",
      "facilities.dishwasher": "Dishwasher",
      "facilities.dryer": "Dryer",

      // Apartment Descriptions
      "apt01.shortDescription":
        "Studio with double bed and fully equipped kitchenette.",
      "apt01.fullDescription":
        "Studio with double bed and fully equipped kitchenette. Bathroom with shower. Ground floor apartment.",
      "apt02.shortDescription":
        "Bedroom with 2 single beds, living room with sofa bed.",
      "apt02.fullDescription":
        "Bedroom with 2 single beds that can be combined into a double bed, living room with sofa bed for 1 person. Fully equipped kitchen. Bathroom with shower. Ground floor apartment.",
      "apt11.shortDescription":
        "Bedroom with double bed, living room with sofa, balcony with view.",
      "apt11.fullDescription":
        "Bedroom with double bed, living room with sofa bed for 2 people. Fully equipped kitchen. Bathroom with shower. Apartment with balcony equipped with coffee table.",
      "apt21.shortDescription": "Spacious apartment with 2 balconies and view.",
      "apt21.fullDescription":
        "Bedroom with 2 single beds that can be combined into a double bed, living room with sofa bed for 2 people. Fully equipped kitchen. Bathroom with shower. Apartment with 2 balconies.",

      // Floor
      "floor.groundFloor": "Ground floor",
      "floor.floor1": "1st floor",
      "floor.floor2": "2nd floor",

      // Apartment Detail
      "apartmentDetail.backToList": "Back to apartment list",
      "apartmentDetail.description": "Description",
      "apartmentDetail.booking": "Booking",
      "apartmentDetail.contactUs": "Contact us",
      "apartmentDetail.checkIn": "Check-in",
      "apartmentDetail.checkOut": "Check-out",
      "apartmentDetail.flexibleHours": "Flexible check-in and check-out hours",
      "apartmentDetail.facilities": "Facilities",

      // Attractions
      "attractions.busko": "BUSKO - ZDRÓJ",
      "attractions.graduationTower": "Graduation Tower",
      "attractions.graduationTowerDesc":
        "The graduation tower in Busko-Zdrój is a modern spa facility offering salt inhalations to improve health and well-being. Inspired by traditional spa graduation towers, the one in Busko-Zdrój uses a wealth of microelements, such as iodine and bromine, to create favorable conditions for regeneration and relaxation. This harmonious space combines natural healing methods with a modern approach to wellness, attracting both tourists and residents who wish to benefit from the beneficial effects of the graduation tower in a peaceful and charming environment.",
      "attractions.alley": "Mickiewicz Promenade",
      "attractions.alleyTitle": "Mickiewicz Avenue",
      "attractions.alleyDesc":
        "Mickiewicz Avenue in Busko-Zdrój is a green, picturesque promenade that is the heart of the city and a favorite place for walks. Surrounded by historic buildings and charming cafes, it offers a unique blend of culture, history and nature, creating a relaxing atmosphere in the very center of Busko-Zdrój.",
      "attractions.marconi": "Marconi Sanatorium",
      "attractions.marconiDesc":
        "Marconi Sanatorium in Busko-Zdrój is a renowned health and rehabilitation center specializing in comprehensive medical and therapeutic care. Known for its high standard of medical services, the sanatorium offers modern treatment methods and comprehensive rehabilitation programs for patients with various conditions. Equipped with advanced medical equipment and a team of experienced specialists, Marconi Sanatorium provides comprehensive care, from diagnostics and therapy to postoperative care. Surrounded by the picturesque landscape of Busko-Zdrój, the sanatorium is also a place where patients can enjoy peace and harmony during convalescence.",
      "attractions.natureReserve": "Cold Waters Reserve",
      "attractions.natureReserveDesc":
        "The Cold Waters Reserve in Busko-Zdrój is a picturesque oasis of nature, valued for its unique natural values and healing mineral waters. Walking paths running through lush forests lead to picturesque streams, creating ideal conditions for rest and communing with nature. This is a place where nature lovers can discover rare species of flora and fauna and enjoy the peace and beauty of the surrounding world.",
      "attractions.buskoland": "BuskoLand",
      "attractions.buskolandDesc":
        "Buskoland in Busko-Zdrój is a family amusement park that offers a wide range of attractions for children and adults. You will find modern playgrounds with colorful slides, trampolines and other equipment that provide children with safe and joyful fun. Parents can relax in special relaxation zones, enjoying comfort and peace, while their children play nearby. Buskoland is the perfect place for active outdoor recreation.",

      // Contact
      "contact.title": "Contact Us",
      "contact.askUs": "Ask for details",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Send",
      "contact.successMessage": "Message sent successfully!",
      "contact.errorMessage":
        "An error occurred while sending the message. Please contact us by phone or try again",
      "contact.howToGetHere": "How to get here",
      "contact.thankYou": "Thank you for your message!",
      "contact.error": "An error occurred. Please try again.",

      // Info Box
      "info.title": "Your exceptional place to relax",
      "info.comfort": "Comfort",
      "info.comfortDesc":
        "Modern apartments with full equipment and air conditioning",
      "info.location": "Location",
      "info.locationDesc": "Close to graduation towers and spa center",
      "info.parking": "Parking",
      "info.parkingDesc": "Free parking for all guests",
      "info.garden": "Garden",
      "info.gardenDesc": "Access to green courtyard with barbecue area",

      // Footer
      "footer.goToContactForm": "Go to Contact Form",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pl",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
