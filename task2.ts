/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая поверхностно сравнивает два объекта
// * В объекте могут быть функции

interface User {
  name: string;
  age: number | (() => number);
}

const user1: User = {
  name: "Vlad",
  age: 23,
};

const user2: User = {
  name: "Vlad",
  age: 23,
};

const user3: User = {
  name: "Vlad",
  age: () => 23,
};

const user4: User = {
  name: "Vlad",
  age: () => 23,
};
