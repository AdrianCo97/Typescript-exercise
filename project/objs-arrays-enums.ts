/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Adrian",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
}; */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {
  ADMIN,
  READONLY,
  AUTHOR,
}

const person = {
  name: "Adrian",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin");
//person.role[1] = 10;

//person.role = [0, 'admin', 'user']

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
