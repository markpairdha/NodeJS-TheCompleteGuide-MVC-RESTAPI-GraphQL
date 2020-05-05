let name = 'markpairdha';
const age = 22;
const male = true;

name = 'mark';


const Function = function(Name,Age,male) 
{
   //return Name + Age + male
   return (Name + Age + male + 'check it out');
}; console.log(Function(name,age,male));



const Function1 = (Name,Age,male) =>
{
   //return Name + Age + male
   return (Name + Age + male + 'check it out');
}; console.log(Function1(name,age,male));



const Function2 = (a,b) => {
    return a+b
}; console.log(Function2(2,2));


const Function3 = (a,b) => a+b;
 console.log(Function3(2,2));

//const Function4 = (a) => a+1;
const Function4 = a => a+1;
console.log(Function4(3));

const Function5 = () => 2+2;
console.log(Function5());