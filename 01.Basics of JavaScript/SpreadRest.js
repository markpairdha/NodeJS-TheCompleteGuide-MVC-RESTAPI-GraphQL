const arr = ['mark','sathish','pairdha','22','male',true];

const copyarray = arr.slice();
const copyarray1 = [arr];
const copyarray2 = [...arr];

console.log(copyarray);
console.log(copyarray1);
console.log(copyarray2);

const func = (...arr)=> {
   return arr;
}

console.log(func(1,2,3,4));

const Person = {
   name : 'mark',
   age : 22,
   male : true,
   great() {
       console.log('Hi i am '+this.name)
   }
};

Person.great();

const copyPerson = {...Person};
copyPerson.great();
console.log(copyPerson.male);