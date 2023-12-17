// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5];

//Creating the Luhn algorithm
const validateCred = (arr) => {
  
  let arr1 = arr.reverse();
  let arr2 = arr1.map((num, ind)=> ind % 2? num * 2 : num);
  let arr3 = arr2.map(x => x > 9? x - 9 : x);
  let a = arr3.reduce((a, b) => a + b, 0);
  if(a % 10 === 0){
    return true;
  }
  return false;
}
console.log(validateCred(mystery2))

const findInvalidCards = (arr) => {
  let invalid = [];
  if(validateCred(arr) === false){
    invalid.push(arr.reverse());
  }
  return invalid;
}
console.log(findInvalidCards(batch));

//Revealing the companies
const idInvalidCardCompanies = arr => {
 let companies = [];
 for(let i = 0; i < arr.length; i++){
   if(arr[i][0] === 3){
     companies.push('Amex');
   }else if(arr[i][0] === 4){
     companies.push('Visa')
   }else if(arr[i][0] === 5){
     companies.push('Mastercard')
   }else if(arr[i][0] === 6){
     companies.push('Discover')
   }else{
     companies.push('Company not found');
   }
 }
 //removing duplicates
 return companies.filter((value, index, arr) => { 
  return arr.indexOf(value) === index;
});
}
console.log(idInvalidCardCompanies(batch))
