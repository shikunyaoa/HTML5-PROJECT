// use the map method to extract data from an array
var rating =  watchList.map((item) =>
    ({title: item["Title"],  rating: item["imdbRating"]}));


//use the filter method to extract data from an array
var filteredList = watchList.map(function(e)
{return {title: e["Title"], rating: e["imdbRating"]}})
    .filter((e) => e.rating >= 8 );



//return part of an array using the slice method
//the first argument gives the index of where to begin the slice
//the second is the index of where to end the slice(and it's non-inclusive)
function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    return anim.slice(beginSlice, endSlice);

    // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


// splice
//the first argument gives the index of where to start removing items
//the second argument is the number of items to remove
//if the second argument is not provided, the
//default is to remove items through the end
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]


//combine two arrays using the concat method
//add elements to the end of an array using concat instead of push
function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return original.concat(attach);

    // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);



// use reduce
var averageRating = watchList.filter(x => x.Director === "Christopher Nolan")
    .map(x => Number(x.imdbRating))
    .reduce((x1, x2) => x1 + x2)
    / watchList.filter(x => x.Director === "Christopher Nolan").length;


//sort an array alphabetically using the sort method
function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a,b) {
        return a > b;
    });
    // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// return a sorted array whthout changing the original array
//one way to avoid change the original array is to first concatenate
// an empty array to the one being sorted
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function(a, b){
        return a - b;
    });

    // Add your code above this line
}
nonMutatingSort(globalArray);


//split a string into an array using the split method
function splitify(str) {
    // Add your code below this line

    return str.split(/\W/);
    // Add your code above this line
}
splitify("Hello World,I-am code");



//combine an array into a string using the join method
function sentensify(str) {
    // Add your code below this line

    return str.split(/\W/).join(' ');
    // Add your code above this line
}
sentensify("May-the-force-be-with-you");



// use the every method to check that every element in an array meets a criteria
function checkPositive(arr) {

    return arr.every(function(value){
        return value > 0;
    });


}
checkPositive([1, 2, 3, -4, 5]);



//use the some method to check that any elements in an array meet a criteria
function checkPositive(arr) {
    // Add your code below this line

    return arr.some(function(value){
        return value > 0;
    });
    // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);