function Point(x,y){
	this.x = x;
	this.y = y;
};

function displayPts(arr){
	for(var i = 0; i<arr.length; i++){
		console.log(arr[i].x + ", " + arr[i].y);
	}
};

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];

for(var i = 0; i < points.length; i++){
	console.log("Point:" + parseInt(i+1) + " "+ points[i].x + " " + points[i].y)
}
var p5 = new Point(12,-3);
points.push(p5);
console.log("After push " + displayPts(points));

points.shift();

console.log("After shift "+ displayPts(points));

//In the example, we create an object that stores the weekly observed high
//temperature. The object has functions for adding a new temperature and computing
//the average of the temperatures stored in the object.

function WeekTemps(){
	this.dataStore = [];
	this.addTemp = addTemp;
	this.averageTemp = averageTemp;
};

function addTemp(temp){
	this.dataStore.push(temp);
};

function averageTemp(){
	var total = 0;
	for(var i = 0; i< this.dataStore.length; i++){
		total = total + this.dataStore[i];
	}
	return total/this.dataStore.length;
};

var thisWeek = new WeekTemps();
thisWeek.addTemp(52);
thisWeek.addTemp(55);
thisWeek.addTemp(61);
thisWeek.addTemp(40);
console.log(thisWeek.averageTemp());
