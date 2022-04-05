const annonces = [
  {
    id: 1,
    title: "Super loft 1",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
  },
  {
    id: 2,
    title: "Super loft 2",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
  },
  {
    id: 3,
    title: "Super loft 3",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
  },
  {
    id: 4,
    title: "Super loft 4",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
  },
  {
    id: 5,
    title: "Super loft 5",
    description: "ratio un peu",
    price: Math.ceil(Math.random() * (1000 - 100) + 100),
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
