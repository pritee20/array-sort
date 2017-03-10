
var arr = [1,3,5,7,2,4,9,10,8,6];
var sortedArray =  arr.sort(function(curentItem, nextitem){
	if(arr.length >= 5){
		return curentItem > nextitem;

	} else {
		return curentItem < nextitem;
	}

});

document.getElementById('sortedArry').innerHTML = sortedArray;

//Filter method

const people = [
  {
    name: 'Sara',
    age: 25,
    gender: 'f',
    us: true,
    legal: true
  },
  {
    name: 'Mike',
    age: 18,
    gender: 'm',
    us: false,
    legal: true
  },
   {
    name: 'Peter',
    age: 17,
    gender: 'm',
    us: false,
    legal: false
  },
   {
    name: 'Ricky',
    age: 27,
    gender: 'm',
    us: false,
    legal: true
  },
  {
    name: 'Martha',
    age: 20,
    gender: 'f',
    us: true,
    legal: true
  },
{
    name: 'Pritee',
    age: 30,
    gender: 'f',
    us: true,
    legal: true
  }  
];

let women =  people.filter(function(person){
	return person.gender === 'f';
});
console.table(women);

var legalDrink =  people.filter(function(person){
	// If the person in the US only return it if they are older or 21
    // If not return the person if the are 18 or above

	return person.us ? person.age >=21 : person.age >= 18;
});
console.table(legalDrink);

// map 
//it runs a function for every element in the array we 
//give it and it returns our new array.

let legalAge =  people.map(function(person){
	if(person.legal === true){
		return person;
	}
});
console.table(legalAge);

// Reduce
//Sometimes we need information from an array 
//and transform it into a completly diffrent array, an object or even a number
//This is where reduce stands out, it allows you to return a whole new element,
// this function also takes two arguments, the first one is the function 
//we want to run inside the reduce and 
//the second argument is what we want to start with, bascially our starting structure.

let age = people.reduce(function(starter, person){
	return starter + person.age;
},2);
console.log(age);

//some more methods
//.forEach(): Do something for each item in the array
//.find(): Like filter but only returns a single item
//.push(): Add new elements to the end of the array
//.pop(): Removes the last element of an array
//.join(): Join the elements of an array into a string
//.concat(): Join two or more arrays (returns a copy)