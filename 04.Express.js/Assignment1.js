/* 
npm init
npm install --save-dev nodemon
"start" : "nodemon app.js"
*/


const express = require('express');
const app = express();

// app.use((req,res,next) => {
//     console.log('I');
//     res.send('<p>Freakking awesome!</p>');
//     next();
// });

// app.use((req,res,next) => {
//     console.log('II');
//     res.send('<p>Freaking awesome!</p>');
//     //next();
// });


app.use('/users',(req,res,next) => {
  console.log('I');
  res.send('<p>In /users </p>');
  next();
});

app.use('/',(req,res,next) => {
    console.log('II');
    res.end('<p>In / </p>');
});

app.listen(3000);
