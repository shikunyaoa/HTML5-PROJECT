//reverse a string
function reverseString(str) {
    //str.split()
    //arr.reverse()
    //arr.join()
    return str.split('').reverse().join('');
}


//Factorialize  a  number
function factorialize(num) {
    if(num == 0) return 1;
    else {
        return num * factorialize(num - 1);
    }

}


//find the longest word in a string
function findLongestWordLength(str) {

    //split the string into individual words
    //(important!!, you'll see why later)
    str = str.split(" ");

    //str only has 1 element left that is the longest element,
    //return the length of that element
    if(str.length == 1){
        return str[0].length;
    }

    //if the first element's length is greater than the second element's (or equal)
    //remove the second element and recursively call the function)
    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
    }

    //if the second element's length is greater thant the first element's start
    //call the function past the first element
    if(str[0].length <= str[1].length){
        // from the first element to the last element inclusive.
        return findLongestWordLength(str.slice(1,str.length).join(" "));
    }
}



//return largest numbers in arrays
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}


//confirm the ending
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.slice(str.length - target.length) === target;
}

//repeat a string
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}


//truncate a string
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}



//finders keepers
function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        if(func(num)){
            return num;
        }
    }
    return undefined;
}


//falsy bouncer
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    //delete false,null,0,"",undefined and NaN on the array
    return arr.filter(Boolean);
}


//insert a number and then return the index of the number
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    return arr.concat(num).sort((a,b)=> a-b).indexOf(num);
}


//check all letters of the second element in the first element of the array
function mutation(arr) {
    return arr[1].toLowerCase()
        .split("")
        .every(function(letter){
            return arr[0].toLowerCase().indexOf(letter) != -1;
        });
}