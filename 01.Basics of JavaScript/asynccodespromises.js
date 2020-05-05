/*
const fetchData = callback => {
  setTimeout(() => {
   callback('Done!');
  },1500);
};

//async code
setTimeout(() => {
    console.log('timer is done');
    fetchData(text => {
        console.log(text);
    });
},2000);
// callback later

console.log('not timer');
*/

const fetchData = () => {
  const promise = new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve('Done1');
      },1500);
});
return promise;
};

setTimeout(() => {
    console.log('timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
},2000);