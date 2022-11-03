let username = "ads";
let age = 41;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "greg",
  lastName: "sans",
};
const PI = 3.1415;

if (age > 18) {
  console.log("mayor a 18");
} else {
  console.log("menor a 18");
}
console.log(user, PI, age, username);
console.log("1====================================");
const names = ["joe", "greg", "jhon"];
for (const namesKey in names) {
  console.log(namesKey, names[namesKey]);
}
console.log("2====================================");
for (const name of names) {
  console.log(name);
}
console.log("3 ====================================");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("4====================================");

function showUserInfo(userName, userAge) {
  return console.log(
    `The username is ${userName} , the user age is ${userAge}`
  );
}

console.log(showUserInfo("hello", 12));

console.log("5====================================");

const userInfo = (name, age) => {
  return `The name is ${name} and the age is ${age}`;
};
console.log(userInfo("jhon", 23));

console.log("6====================================");
const userInfo2 = (name, age) => `name is ${name} age is ${age}`;
console.log(userInfo2("mike", 27));
