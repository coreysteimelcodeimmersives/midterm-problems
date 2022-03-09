function isEvenlyDivisible(num1, num2){
  if (num1 % num2 === 0){
    return true;
  } else {
    return false;
  }
}

function halfSquare(num) {
  return (Math.pow(num, 2))/2;
}

function isLong(str) {
  return str.length >= 15 ? true : false;
  // if (str.length >= 15){
  //   return true;
  // } else {
  //   return false;
  // }
}

// this works too.
// function exclaim(str){
//   let newStr = str.replaceAll(`!`,``)
//   return newStr += `!`
// }

function exclaim(str) {
  if (str.indexOf(`!`) === -1){
    return str + `!`;
  } else {
    return str.substring(0, str.indexOf(`!`)+1);
  }
  // let newStr = str;
  // for (let i = 0; i < str.length; i++){
  //   if (str[str.length-(i+1)] === `!`){
  //     newStr = str.slice(0, str.length-(i+1));
  //   } else {
  //     break;
  //   }
  // }
  // return newStr += `!`
}

function countWords(str) {
  return str.split(` `).length;
}

function containsDigit(str) {
  let digits =`1234567890`;
  for (let i = 0; i < str.length; i++){
    if (digits.includes(str[i])){
      return true;
    }
  }
  return false;
}

function containsLowerCase(str) {
  let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++){
    if (lowerCaseChars.includes(str[i])){
      return true;
    }
  }
  return false;
}

function containsUpperCase(str) {
  let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++){
    if (upperCaseChars.includes(str[i])){
      return true;
    }
  }
  return false;
}

function containsNonAlphanumeric(str) {
  let alphaNumericChars = `abcdefghijklmnopqrstuvwxyz1234567890`;
  for (let i = 0; i < str.length; i++){
    if (!alphaNumericChars.includes(str[i].toLowerCase())){
      return true;
    }
  }
  return false;
}

function containsSpace(str) {
  let spaceChar = ` `;
  for (let i = 0; i < str.length; i++){
    if (spaceChar.includes(str[i])){
      return true;
    }
  }
  return false;
}

function digits(num) {
  let strNum = num.toString();
  let numChars = `12345678790`;
  let numArray = [];
  for (let i = 0; i < strNum.length; i++){
    if (numChars.includes(strNum[i])){
      numArray.push(Number(strNum[i]));
    }
  }
  return numArray;
}

function truncate(str) {
  if (str.length < 15){
    return str;
  } else {
    return `${str.substring(0,8)}...`
  }
}

function isValidPassword(str) {
  let alphaNumericChars = `abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let lowerCaseChars = `abcdefghijklmnopqrstuvwxyz`;
  let upperCaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let numChars = `12345678790`;
  let space = ` `;
  let boolNumbers = false;
  let boolNoSpace = false;
  let boolContainsUpperCase = false;
  let boolContainsLowerCase = false;
  let boolContainsNonAlphaNumeric = false;

  for (let i = 0; i < str.length; i++){
    if (space.includes(str[i])){
      return false;
    } else {
      boolNoSpace = true;
    }
  }

  for (let i = 0; i < str.length; i++){
    if (lowerCaseChars.includes(str[i])){
      boolContainsLowerCase = true;
    }
  }

  for (let i = 0; i < str.length; i++){
    if (upperCaseChars.includes(str[i])){
      boolContainsUpperCase = true;
    }
  }

  for (let i = 0; i < str.length; i++){
    if (!alphaNumericChars.includes(str[i])){
      boolContainsNonAlphaNumeric = true;
    }
  }

  for (let i = 0; i < str.length; i++){
    if (numChars.includes(str[i])){
      boolNumbers = true;
    }
  }

  if (boolContainsLowerCase === true && boolContainsNonAlphaNumeric === true && boolContainsUpperCase && boolNoSpace == true && boolNumbers === true){
    return true;
  } else {
    return false;
  }
}

function onlyPunchy(arr) {
  let newArr = [];
  // For each Title (element) in the Title Array:
  for (let i = 0; i < arr.length; i++){
    let el = arr[i];
    console.log(`el is ... ${el}`);
    let newTitle = el;
    // For each string character in each Title (element):
    for (let i = 0; i < el.length; i++){
      if (el[el.length-(i+1)] === `!`){
        newTitle = el.slice(0, el.length-(i+1));
      } else {
        break;
      }
    }
    arr[i] = newTitle;
    console.log(`new title is ... ${newTitle}`);
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length < 15){
      arr[i] += `!`;
      console.log(`add the ! ... ${arr[i]}`)
      newArr.push(arr[i]);
      console.log(`newArr ... `);
      console.log(newArr);
    }
  }
  return newArr;
}

onlyPunchy(['quarantine!', 'the lord of the rings', 'the matrix!']);


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}