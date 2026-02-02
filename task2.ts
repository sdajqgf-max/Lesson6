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

const compareObjects = (object: User, object2: User) => {
 // for (const key1 in object1) {
 //   for (const key2 in object2) {
 //     const objectKey1: string = object2[key1];
 //     const objectKey2: string = object1[key2];
 //     if (objectKey1 === objectKey2) {
  //      continue;
 //     }
 //     return false;
 //   }
 // }
 // return true;
//};