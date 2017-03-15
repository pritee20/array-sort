// need perform on same array  
//"forEach" This function takes a function as an argument
//and applies the called function to each element of an array. 

var anynum = [1,2,3,4,5,6];

function squar(num){
	console.log(num * num);
};


//anynum.forEach(squar);

//every(), applies a Boolean function to an array and returns
//true if the function can return true for every element in the array.


var anymixNum = [1,2,3,4,5,6,7,8,9,10];
var isEvenNum = [2,4,6,8,10];

function isEven(any){
	return any % 2 == 0;
};

//console.log(anymixNum.every(isEven));
//console.log(isEvenNum.every(isEven));
var everynumberIsEven = anymixNum.every(isEven);
if(everynumberIsEven){
	console.log("Every number is Even ");
} else {
	console.log("No match");
}
anymixNum.some(isEven); // false so it will print else that means all number


// reduce() function applies a function to an accumulator and the successive elements
//of an array until the end of the array is reached, yielding a single value

function addViareduce(value, currentItem){
	return value + currentItem;

};
var R = [5,5,5,10];
var sumofAll =  R.reduce(addViareduce);
console.log(sumofAll);

//array we have reduceRight() function

var digit = [2,3,4,7,8,10];//["the","quick","brown","fox"]
function reverseAnyDigit(runningItem, item){
	return runningItem + ' ' + item;
}

var reversDigit = digit.reduceRight(reverseAnyDigit);
console.log(reversDigit);


// two iterator functions that return new arrays: map() and filter(). 
//The map()
//function works like the forEach() function, applying a function to each element of an
//array. The difference between the two functions is that map() returns a new array with
//the results of the function application.

function curve(grade){
	return grade += 5;
}
var grading = [10,20,30,40];
var newGrade =  grading.map(curve);
console.log(newGrade);


//The filter() function works similarly to every(), but instead of returning true if all
//the elements of an array satisfy a Boolean function, the function returns a new array
//consisting of those elements that satisfy the Boolean function.

function evenIs(num){
	return num % 2 == 0;
};

function oddIs(num){
	return num % 2 != 0;
};
var mycollection = [];

for(var i = 0; i<20; i++){
	mycollection[i] = i + 1;
};

var evens =  mycollection.filter(evenIs);
console.log(evens);
var odds = mycollection.filter(oddIs);
console.log(odds);

















