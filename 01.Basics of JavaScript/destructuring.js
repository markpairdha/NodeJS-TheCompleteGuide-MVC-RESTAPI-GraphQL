const Person = {
  name : 'mark',
  age : 22,
  male : true,
  greet() {
      console.log(this.name);
  }
};

const printage = (personData) => {
   console.log(personData.age);
};

const printany = ({name,age}) => {
   console.log(name,age);
};


printage(Person);
printany(Person);


const {name,age} = Person;
console.log(name,age);

const hobbies = ['code','live'];
const [hobby1,hobby2] = hobbies;

console.log(hobby1,hobby2);