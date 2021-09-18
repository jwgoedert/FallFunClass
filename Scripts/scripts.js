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



let arrayTitles = document.getElementById('array-titles');
let ul = document.createElement('ul');
arrayTitles.append(ul);

//Adding JS into HTML
//write array info to html
for (var i = 0; i < funClubList.length; i++) {
    // console.log(funClub[i] + " is in the funnest fall class!");
    isFromOmaha(funClubList[i]);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = funClubList[i].firstName;
    li.style.color = 'Deeppink';
}

//fetch external data
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';

fetch(apiUrl)
    // fetch('people.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        appendData(data.abilities);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        console.log(data[i].ability);
        div.innerHTML = 'Name: ' + data[i].ability.name;//+ ' ' + data[i].lastName;
        mainContainer.appendChild(div);
    }
}