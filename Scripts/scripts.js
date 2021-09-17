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

//For loop uses (start value variable; end condition; counter)
for(var i = 0; i < funClub.length; i++){
    // console.log(funClub[i] + " is in the funnest fall class!");
}

//conditionals

let funClubList = [{
        firstName: 'James',
        lastName: 'Goedert',
        favoriteNumber: 35,
        fromOmaha: true,
    }, {
        firstName: 'Michael',
        lastName: 'Caliguiri',
        favoriteNumber: 31,
        fromOmaha: false,
    },{
        firstName: 'Vanessa',
        lastName: 'Martinez-Hernandez',
        favoriteNumber: 10,
        fromOmaha: true,
    }
]

function isFromOmaha(person){
    if (person.fromOmaha == true) {
        console.log(person.firstName + ' is from Omaha');
    } else if (person.fromOmaha !== true) {
        console.log(person.firstName + ' is not from Omaha');
    } else {
        console.log('that information was not provided');
    }
}

for (var i = 0; i < funClubList.length; i++) {
    // console.log(funClub[i] + " is in the funnest fall class!");
    isFromOmaha(funClubList[i]);
}