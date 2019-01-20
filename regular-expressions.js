//using the text method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//match a literal string with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

//ignore case while matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

//extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

//match anything with wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

//match single character with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
//placing them inside square([ and ]) brackets
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

//match letters of the alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);


//match numbers and letters of the alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

//match single characters not specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/gi;
let result = quoteSample.match(myRegex);

//match characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /ss+/g;
let result = difficultSpelling.match(myRegex);

//match characters that occur zero or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /aa*a/ig;
let result = chewieQuote.match(chewieRegex);


//find characters with lazy matching
let text = "<h1>Winter is coming</h1>";
//lazy matching *?
let myRegex = /<.*?>/;
let result = text.match(myRegex); //return <h1>
let myregex = /<.*>/;
let result = text.match(myregex); //return all text



//match beginning string patterns
//outside of a character set, the caret is used to
//search for patterns at the beginning of strings
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

//match ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

//match all letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
//\w is equal to [A-Za-z0-9_]
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;


//match everything but letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
//\W is equal to [^A-Za-z0-9_]
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

//match all numbers
let numString = "Your sandwich will be $5.00";
// \d is equal to the character class [0-9]
let numRegex = /\d/g;
let result = numString.match(numRegex).length;

//match all non-numbers
let numString = "Your sandwich will be $5.00";
//\D is equal to the character class [^0-9]
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;

//match whitespace
let sample = "Whitespace is important in separating words";
//\s is similar to the character class [ \r\t\f\n\v]
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);


//match non-whitespace characters
let sample = "Whitespace is important in separating words";
//\s is similar to the character class [^ \r\t\f\n\v]
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

//specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);

//specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

//specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);


//check fo all or none
let favWord = "favorite";
//? checks for zero or one of thr preceding element
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

//positive and negative lookahead
let sampleWord = "astronaut";
// positive lookahead is used as (?=...)
//negative lookahead is used as (?!...)
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

//reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

//use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);