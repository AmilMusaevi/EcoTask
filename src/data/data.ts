import { nanoid } from "nanoid";

export const tableDefaultData = [
  {
    name: "Amil",
    surname: "Musaevi",
    patronymic: "Ramil",
    gender: "Male",
    key: nanoid(),
  },
  {
    name: "Qabil",
    surname: "Musaevi",
    patronymic: "Ramil",
    gender: "Male",
    key: nanoid(),
  },
  {
    name: "Fatma",
    surname: "Musaevi",
    patronymic: "Ramil",
    gender: "Female",
    key: nanoid(),
  },
];

export const selectOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];
