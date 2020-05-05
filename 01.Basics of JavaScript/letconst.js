/*
console.log('Hello Node js');
const fs = require('fs');
fs.writeFileSync('hello.xt','hello node');

*/

let name = 'markpairdha';
const age = 22;
const male = true;

name = 'mark ';
// age = 19;
function practice(userName,userAge,userSex)
{
    return (
        'User name is '+ userName + 'Age : ' + userAge + ' has ' + userSex
        );
}

console.log(practice(name,age,male));
