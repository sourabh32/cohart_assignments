/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
let result = true;
if(str1.length!== str2.length){
  return false
}
let arr1 = str1.toLowerCase().split("")
let arr2 = str2.toLowerCase().split("")

for(let i=0;i<arr1.length;i++){
  console.log(arr1[i] ,arr2.includes(arr1[i]))
 if(  !arr2.includes(arr1[i])){
  
  return false
 }
 
 
}


return result
}

console.log(isAnagram("hello","ollh"))

module.exports = isAnagram;
