const annonces = [
  {
    id: 1,
    title: "Super loft 1",
    type: "Appartement",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
    country: "Clermont-Ferrand",
    zipcode: "63000",
    capacity: 2,
    rooms: 1,
    bail: "145",
    cniNeeded: true,
    passeportNeeded: false,
    justificatifNeeded: true,
    animalsAllowed: true,
    smokersAllowed: true,
    arrivalHour: "10:00",
    departureHour: "12:00",
    createdAt: new Date().toLocaleString(),
    tel: "0698246165",
  },
  {
    id: 2,
    title: "Super loft 2",
    type: "Appartement",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
    country: "Clermont-Ferrand",
    zipcode: "63000",
    capacity: 2,
    rooms: 1,
    bail: "145",
    cniNeeded: true,
    passeportNeeded: false,
    justificatifNeeded: true,
    animalsAllowed: false,
    smokersAllowed: true,
    arrivalHour: "10:00",
    departureHour: "12:00",
    createdAt: new Date().toLocaleString(),
    tel: "0698246165",
  },
  {
    id: 3,
    title: "Super loft 3",
    type: "Appartement",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
    country: "Clermont-Ferrand",
    zipcode: "63000",
    capacity: 2,
    rooms: 1,
    bail: "145",
    cniNeeded: true,
    passeportNeeded: false,
    justificatifNeeded: true,
    animalsAllowed: true,
    smokersAllowed: true,
    arrivalHour: "10:00",
    departureHour: "12:00",
    createdAt: new Date().toLocaleString(),
    tel: "0698246165",
  },
  {
    id: 4,
    title: "Super loft 4",
    type: "Appartement",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
    country: "Clermont-Ferrand",
    zipcode: "63000",
    capacity: 2,
    rooms: 1,
    bail: "145",
    cniNeeded: true,
    passeportNeeded: false,
    justificatifNeeded: true,
    animalsAllowed: false,
    smokersAllowed: false,
    arrivalHour: "10:00",
    departureHour: "12:00",
    createdAt: new Date().toLocaleString(),
    tel: "0698246165",
  },
  {
    id: 5,
    title: "Super loft 5",
    type: "Appartement",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
    country: "Clermont-Ferrand",
    zipcode: "63000",
    capacity: 2,
    rooms: 1,
    bail: "145",
    cniNeeded: true,
    passeportNeeded: false,
    justificatifNeeded: true,
    animalsAllowed: true,
    smokersAllowed: false,
    arrivalHour: "10:00",
    departureHour: "12:00",
    createdAt: new Date().toLocaleString(),
    tel: "0698246165",
  },
];

const users = [
  {
    id: 1,
    firstname: "Mathis",
    lastname: "Chambon",
    age: "20",
    country: "France",
  },
  {
    id: 2,
    firstname: "Jey",
    lastname: "Laylow",
    age: "29",
    country: "France",
  },
];

const userFavoriteAnnonces = [1, 4, 5];

const userReservationRequest = [];

export const getAnnonces = () => annonces;
export const getUsers = () => users;

export const getAnnonce = (id) =>
  annonces.find((annonce) => annonce.id === +id);

export const getUser = (id) => users.find((annonce) => annonce.id === id);

export const addAnnonce = (data) =>
  annonces.push({ id: annonces.length + 1, ...data });

export const addUser = (data) => users.push({ id: users.length + 1, ...data });

export const getFavoriteAnnonces = () =>
  annonces.filter((annonce) => userFavoriteAnnonces.includes(annonce.id));

export const getReservationRequest = () =>
  annonces
    .filter((annonce) =>
      userReservationRequest.some((req) => req.idAnnonce === annonce.id)
    )
    .map((annonce) => ({
      annonce: annonce,
      idUser: userReservationRequest.find((req) => req.idAnnonce === annonce.id)
        .idUser,
    }));

export const addReservation = ({ idAnnonce, idUser }) =>
  userReservationRequest.push({ idAnnonce: idAnnonce, idUser: idUser });
