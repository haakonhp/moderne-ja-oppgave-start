import "./styles.css";

/**
 *
 * Challenge : Bruk for-of
 *
 */

const list = [
  { id: 1, name: "Marius" },
  { id: 2, name: "Marte" }
];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

var numbers = [1, 2, 3, 4];
var doubles = [];

/**
 *
 * Challenge : Bruk array.map()
 *
 */

for (let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}
console.log(doubles);

/**
 *
 * Challenge : Map (data-typen)
 *
 */

var map = [
  { id: 1, name: "Marius" },
  { id: 2, name: "Marte" }
];

/**
 *
 * Challenge : deconstruct
 *
 */

for (const [key, value] of map.entries()) {
  // Deconstruct (hent ut) name fra value
  const name = null;
  console.log(`Navnet er ${null}`); // Navnet er Marius, Navnet er Marte
}

/**
 *
 * Challenge : Gjør om til arrow function
 *
 */

function calculate(x, y) {
  return x + y;
}

console.log(calculate(2, 3)); // Skal gi 5

/**
 *
 * Challenge : bruk default verdi 1 så denne ikke feiler (NAN)
 *
 */

function defaultValue(x, y) {
  return x / y;
}

console.log(defaultValue(3)); // Skal gi 3

const students = ["Lars", "Tiril", "Finn"];
const selectedStudents = [];

for (let index = 0; index < students.length; index++) {
  console.log(students[index].length);
  if (students[index].length > 4) {
    selectedStudents.push(students[index]);
  }
}

console.log(selectedStudents); // Tiril

/**
 *
 * Challenge : forEach og decunstruct age direkte i funksjonen sin parameter
 *
 */

const studentsWithAge = [
  { name: "Omar", age: 22 },
  { name: "Ali", age: 44 },
  { name: "Susanne", age: 18 }
];

let sum = 0;

// Deconstruct age
function sumStudentAge(student) {
  sum += student.age;
}

// Bruk forEach
for (let index = 0; index < studentsWithAge.length; index++) {
  const student = studentsWithAge[index];
  sumStudentAge(student);
}

console.log(sum); // Skal gi 84

/**
 *
 * Challenge : Operators
 *
 */

function Test(statement) {
  const { ageOne, ageTwo, value } = statement;
  switch (value) {
    case "&&": {
      // Bruk && til å sjekke at ageOne og ageTwo er større enn 10
      const message = "Erstatt denne";
      console.log("&&", message); // Skal gi: && true
      break;
    }
    case "??": {
      // Bruk ?? til å sjekke om ageOne har verdi. Hvis ikke gi ageTwo sin.
      const message = "Erstatt denne";
      console.log("??", message); // Skal gi: ?? 25
      break;
    }
    case "?": {
      // Bruk ? til å gi tilbake rett beskjed
      // Hvis ageOne er større enn 22 skal vi få tilbake "Allowed"
      // Hvis ikke skal vi få Not allowed
      const message = "Erstatt denne";
      console.log("?", message); // Skal gi: ?? 25
      break;
    }
    case "?.": {
      // Ta bort "" rundt message
      // Bruk ?. til å unngå at denne feiler
      const message = "statement.ageOne.length";
      console.log("?.", message); // Skal gi:  ?. undefined
      break;
    }
    case "||": {
      // Bruk || til å gi tilbake ageTwo sin verdi
      const message = "Erstatt denne";
      console.log("||", message); // Skal gi:  || 25
      break;
    }
    default:
      break;
  }
}

const statements = [
  {
    ageOne: 22,
    ageTwo: 25,
    value: "&&"
  },
  {
    ageOne: null,
    ageTwo: 25,
    value: "??"
  },
  {
    ageOne: 23,
    ageTwo: 25,
    value: "?"
  },
  {
    ageOne: null,
    ageTwo: 25,
    value: "?."
  },
  {
    ageOne: 0,
    ageTwo: 25,
    value: "||"
  }
];

statements.forEach((statement) => Test(statement));
