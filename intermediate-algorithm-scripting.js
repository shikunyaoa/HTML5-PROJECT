// sum all numbers in range
//plus the sum of all the numbers between them
function sumAll(arr) {

    var sum = 0;
    for(var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;

    }
    return sum;
}

sumAll([1, 4]);



//diff two arrays
function diffArray(arr1, arr2) {

    return arr1.concat(arr2)
        .filter(item => !arr1.includes(item)|| !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




//seek and destroy
function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(i => !args.includes(i));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



//where art thou
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);


    return collection.filter(function(obj){
        return srcKeys.every(function(k){
            return obj.hasOwnProperty(k) && obj[k] === source[k];
        });
    });

    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });




//spinal tap case
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');



//pig Latin
function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else if(str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + 'ay';
    } else {

        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}

translatePigLatin("consonant");