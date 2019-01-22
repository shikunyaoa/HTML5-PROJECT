// add items to an array with push() and unshift()
function mixedNumbers(arr) {
    // push() method adds elements to the end of an array
    arr.push(7, 'VIII', 9);
    //unshift() adds elements to the beginning
    arr.unshift('I', 2, 'three');
    // change code above this line
    return arr;
}



//remove items from an array with pop() and shift()
function popShift(arr) {
    //pop() removes an element from the end of an array
    let popped = arr.pop();
    //shift（） removes an element from the beginning of an array
    let shifted = arr.shift();
    return [shifted, popped];
}


//remove items using splice()
function sumOfTen(arr) {
    // the first represents the index on the array from which to begin removing elements
    //second parameter indicates the number of elements to delete
    arr.splice(2, 2);

    return arr.reduce((a, b) => a + b);
}


//add items using splice()
function htmlColorNames(arr) {
    // the third parameter represents one
    // or more elements to add them as well
    //add the place of the moved elements

    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

    return arr;
}


//copy array items using slice()
function forecast(arr) {
    // the first is the index at which to begin extraction
    // the second is the index at which to stop extraction
    // but not include the element at this index
    arr = arr.slice(2,4);
    return arr;
}


//copy an array with the spread operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // [...arr] == arr
        // ... allows us to easily copy all of an array's
        //elements
        newArr.push([...arr]);

        num--;
    }
    return newArr;
}

//combine arrays with the spread operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment ,'is', 'fun']; // change this line
    return sentence;
}


// check for the presence of an element with indexOf()
function quickCheck(arr, elem) {
    //indexOf returns the position or index of that element o
    // or -1 if the element does not exist on the array
    let result = arr.indexOf(elem);
    if(result != -1){
        return true;
    }
    return false;

}


//iterate through all an array's items using for loops
function filteredArray(arr, elem) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// create complex multi-dimensional arrays
let myNestedArray = [

    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
];


//use the delete keyword to remove object properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};


delete foods.oranges;
delete foods.plums;
delete foods.strawberries;


// check if an object has a property
Alan: {
    age: 27,
        online: true
},
Jeff: {
    age: 32,
        online: true
},
Sarah: {
    age: 48,
        online: true
},
Ryan: {
    age: 19,
        online: true
}
};

function isEveryoneHere(obj) {
    // change code below this line
    if (obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') &&
        obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan')) {
        return true;
    }
    return false;
}


//iterate through the keys of an object with a
// for ...in statement
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {

    let result = 0;
    for(let user in obj){
        if(obj[user].online == true){

            result++;
        }

    }
    return result;

}


//generate an array of all object keys with Object.keys()
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    
    return Object.keys(obj);

}