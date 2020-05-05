const model = {
    name : 'mark',
    age : 23,
    male : true,
    //infunction(){ 
     infunction : function() {
    //infunction : () => { //doesnt work
      console.log('my name is ' + this.name);
    }
};

model.infunction();


//arrays 

const array = ['string','pilot',25,true];
array.push('mom');  //although we defined array as const and later push-ed an string its not an error because array is a pointer 

for(let each of array)
{
    console.log(each);
};

console.log(array.map(pointer => 'Hobby ' + pointer));