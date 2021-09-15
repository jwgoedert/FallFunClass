console.log("Hello World Again!");
//Showing data type example
//simple data types
var firstName = 'James';
var lastName = 'Goedert';
var favoriteNumber = 35;
var fromOmaha = true;
//complex data types
//object example
var fullPerson = {
    firstName: 'James',
    lastName: 'Goedert',
    favoriteNumber: 35,
    fromOmaha: true,
}

console.log(fullPerson.favoriteNumber, fullPerson.lastName);
//array example
var funClub = ['Vanessa', 'Michael', 'James', 'Bob', 'Amanda'];
console.log(funClub[0]);

//For loop uses (start value variable; end condition; counter)
for(var i = 0; i < funClub.length; i = i + 1){
    console.log(funClub[i]);
    // console.log(i);
//action
}
