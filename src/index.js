/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
  if (!isNaN(a) && !isNaN(b)){
    return Math.max(a,b);
  } else if (!isNaN(a) && isNaN(b)){
    return a;
  } else if (isNaN(a) && !isNaN(b)){
    return b;
  } else {
    return NaN;
  }
  }

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
    return Math.max(a,b,c);
  } else if (!isNaN(a) && isNaN(b) && isNaN(c)){
    return a;
  } else if (isNaN(a) && !isNaN(b) && isNaN(c)){
    return b;
  } else if (isNaN(a) && isNaN(b) && !isNaN(c)){
    return c;
  } else if (isNaN(a) && !isNaN(b) && !isNaN(c)){
    return Math.max(b,c);
  } else if (!isNaN(a) && isNaN(b) && !isNaN(c)){
    return Math.max(a,c);
  } else if (!isNaN(a) && !isNaN(b) && isNaN(c)){
    return Math.max(a,b);
  } else if (isNaN(a) && isNaN(b) && isNaN(c)){
    return NaN;
  }
  }



console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));
//
// /**
//  * PART 2
//  *
//  * Write a function isVowel() that takes a character (i.e. a string of length 1)
//  * and returns true if it is a vowel, false otherwise.
//  */
//
function isVowel(char) {

  var vowels = ['a','e','i','o','u','A','E','I','O','U']

  for (var i=0; i<vowels.length; i++){

    if (char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'
        ||char === 'A'||char === 'E'||char === 'I'||char === 'O'||char === 'U'){
      return true;

    }
  }
  return false;

};

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// /**
//  * PART 3
//  *
//  * Write a function rovarspraket() that will translate
//  * a text into a "rövarspråket". That is, double every
//  * consonant and place an occurrence of "o" in between.
//  *
//  * For example, rovarspraket("this is fun") should
//  * return the string "tothohisos isos fofunon".
//
//  */
//
var rovarspraket = function(text){

// make all of the text lowercase
  var string = text;

//identify the vowels
  var vowels = ["a", "e", "i", "o", "u", " "];

//put everything into a string

  var y = "";

//create a loop that goes through string (text but lowercased)
  for (i = 0; i < string.length; i++) {

//make a new variable called current that returns a character frpom a specified index in a string
     var current = string.charAt(i);

// if the elements from the current array are within the vowels array
    if (vowels.indexOf(current) != -1) {

// then add y (accumulator) to the current variable
        y = (y + (current));

// otherwise add y to the current variable, however place the letter o in between
    } else {
        y = (y + (current + "o" + current));

    }
  }
  return y;
};

console.log(rovarspraket("this is fun"));

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

// /**
//  * Part 4
//  *
//  * Define a function reverse() that computes
//  * the reversal of a string. For example,
//  * reverse("skoob") should return the
//  * string "books".
//  */
//
function reverse(str){

//make str a new variable called string because it's easier for me to understand
  var string = str;

//split the string, the reverse it and joined together into one string.
  return string.split('').reverse().join('');
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

// /**
//  * Part 5
//  *
//  * Write a function findLongestWord() that takes a
//  * string and returns the first, longest word in the array.
//  *
//  * i.e. findLongestWord("book dogs") should return "book"
//  */
//

//No Idea why this is not asserting?? I am splitting the words up, setting a minimum of 0,
//running a loop to check every word and setting every word greater than 0 as the new string, eventually
//the highest number will remain at the top and thus I have my longest numeber, so I return longestWord.
function findLongestWord(sentence){
  var string = sentence.split(' ');

  var longestWord = 0;

  for (var i= 0; i<longestWord.length; i++){

    if (string[i].length > longestWord){
      longestWord = string[i].length;
    }
  }
  return longestWord;
}
console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
