/* const students = [
  { name: "Thomas", age: 15, grade: 47 },
  { name: "Josephine", age: 16, grade: 76 },
  { name: "Matthew", age: 15, grade: 88 },
  { name: "Max", age: 16, grade: 65 },
  { name: "Elisa", age: 15, grade: 100 },
  { name: "Wilson", age: 16, grade: 20 },
  { name: "Alex", age: 15, grade: 92 },
];

students
  .filter((student) => student.grade > 80)
  .forEach((topStudents) => console.log(topStudents.name));

students
  .filter((student) => student.age <= 21)
  .forEach((youngStudents) => console.log(youngStudents.name)); */

/* students.forEach((student) => console.log(student.name, student.grade));

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents); */

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

/* products.forEach((product) => console.log(product.name, product.price)); */

products.forEach(
  (product) => Math.round(product.price * 1.1),
  console.log(product.price)
);
