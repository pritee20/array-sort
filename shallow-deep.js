//Shallow copy refrence the same array and update it
var num = [];
for(var i = 0; i<10; ++i){
	num[i] = i + 1;
}
console.log(num);
var sumNum = num;
sumNum[11] = "Pritee";
console.log(sumNum);
console.log(num);


// Deep Copy
function copy(arr1,arr2){
	for(var j = 0; j<arr1.length;++j){
		arr2[j] = arr1[j];
	}
}

var anyNum = [];
for(var z = 0; z < 10; ++z){
	anyNum[z] = z + 1;
}
var deepCopy = [];
console.log("Normal arr1: " + anyNum);
copy(deepCopy,anyNum);
deepCopy[0] = "Pritee Tanwar";
console.log("DeepCopy arr2: " + deepCopy);
console.log(anyNum);