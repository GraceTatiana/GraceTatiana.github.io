function max(x,y){
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log("the expected output of max(10,20) is 20 and mine is:" + max(10,20) )

function maxOfThree(x, y, z){
    return max(max(x,y), z);
    // if(x > y && x > z){
    //     return x;
    // }else if(y > x && y > z){
    //     return y;
    // }else if(z > x && z > y){
    //     return z;
    // }
    
}
console.log("the expected output of maxOfThree(10,20,30) is 30 and mine is:" + maxOfThree(10,20,30) )
function isVowel(x){

    // if (x === 'u'){
    //     return true;
    // }
    switch(x){
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
            return false;
    }
}
console.log("Expected output of isVowel('a') is true -> " + isVowel('a'));
console.log("Expected output of isVowel('c') is false -> " + isVowel('c'));
function sum(x){
    var sum = 0;
    for(let i = 0; i < x.length; i++ ){
        
        sum += x[i];
    }
    return sum;
}
console.log("Expected output of sum([100,10,5.5]) is 115.5 -> " + sum([100,10,5.5]));

function multiply(x){
    var mul = 1;
    for(let i = 0; i < x.length; i++ ){
        
        mul *= x[i];
    }
    return mul;
}
console.log("Expected output of sum([100,10,5.5]) is 5500 -> " + multiply([100,10,5.5]));

function reverse(y){
    var rev = " ";
    for(let i= y.length - 1; i >= 0 ;i-- ) {
        rev += y.charAt(i);
    }
    return rev;

}
console.log("Expected output of reverse(\"Hello\") is  -> " + reverse("Hello"));

// function findLongestWord(z){
//     var word = " ";
//     for(let i = 0; i < z.length ;i++ ) {
//        if(z[i].length > z[i + 1].length){
//             word += z[i];
//        }
//     }
//     return word;
// }
function findLongestWord(words) {
    return words.reduce((longestLength, word) => {
        return longestLength > word.length ? longestLength : word.length;
    }, 0);
}
console.log("Expected output of findLongestWord([\"Bat\", \"Batman\", \"BatMobile\", \"Robin\"]) is  -> " + findLongestWord(["Bat", "Batman","BatMobile", "Robin"]));

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['One','Threes','Configure','xylem'], 5) is ['Threes','Configure'] => " +
 filterLongWords(["One", "Threes", "Configure", "xylem"], 5));
