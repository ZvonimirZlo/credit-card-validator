const inputField = document.getElementById('input');
const btn = document.querySelector('button');
const container = document.getElementById('card');
const result = document.getElementById('result');

const formatInput = () => {
  const nums = inputField.value.toString().replace(/[^\d]/g, '');

  //slices the input value to pieces
  const partOne = nums.slice(0, 4);
  const partTwo = nums.slice(4, 8);
  const partThree = nums.slice(8, 12)
  const partFour = nums.slice(12, 16);
  const partFive = nums.slice(16, 19); // 19 is the maximum possible credit card number length

  //input number form
  return `${partOne}  ${partTwo}  ${partThree}  ${partFour}  ${partFive}`;
}

// input form handler
const handleInput = () => {
  const formattedInput = formatInput(inputField.value);
  inputField.value = formattedInput;
}

// formatting input number
inputField.oninput = handleInput;

// checks card brand
const handleBrand = () => {
  if (inputField.value.startsWith('34') || inputField.value.startsWith('37')) {
    return 'American Express';
  } else if (inputField.value.startsWith('30')) {
    return 'Diners Club - Carte Blanche';
  } else if (inputField.value.startsWith('36') || inputField.value.startsWith('38') || inputField.value.startsWith('39')) {
    return 'Diners Club - International';
  } else if (inputField.value.startsWith('6011') || inputField.value.startsWith('62') || inputField.value.startsWith('64') || inputField.value.startsWith('65')) {
    return 'Discover';
  } else if (inputField.value.startsWith('637') || inputField.value.startsWith('638') || inputField.value.startsWith('639')) {
    return 'InstaPayment';
  } else if (inputField.value.startsWith('35')) {
    return 'JCB';
  } else if (inputField.value.startsWith('50') || inputField.value.startsWith('58') || inputField.value.startsWith('63') || inputField.value.startsWith('67')) {
    return 'Maestro';
  } else if (inputField.value.startsWith('51') || inputField.value.startsWith('52') || inputField.value.startsWith('53') || inputField.value.startsWith('54') || inputField.value.startsWith('55') || inputField.value.startsWith('22') || inputField.value.startsWith('23') || inputField.value.startsWith('24') || inputField.value.startsWith('25') || inputField.value.startsWith('26') || inputField.value.startsWith('27')) {
    return 'MasterCard';
  } else if (inputField.value.startsWith('4')) {
    return 'Visa';
  } else if (inputField.value.startsWith('604')) {
    return 'UkrCard';
  } else if (inputField.value.startsWith('353' || inputField.value.startsWith('356'))) {
    return 'RuPay';
  } else if (inputField.value.startsWith('636')) {
    return 'InterPayment';
  } else if (inputField.value.startsWith('5019') || inputField.value.startsWith('4571')) {
    return 'Dankort';
  } else if (inputField.value.startsWith('2200') || inputField.value.startsWith('2201') || inputField.value.startsWith('2202') || inputField.value.startsWith('2203') || inputField.value.startsWith('2204')) {
    return 'Mir'
  } else if (inputField.value.startsWith('2205')) {
    return 'Borica';
  } else if (inputField.value.startsWith('9792')) {
    return 'Troy';
  } else if (inputField.value.startsWith('1')) {
    return 'UATP';
  } else if (inputField.value.startsWith('8600') || inputField.value.startsWith('5614')) {
    return 'UzCard';
  } else if (inputField.value.startsWith('9860')) {
    return 'Humo';
  } else if (inputField.value.startsWith('1946')) {
    return 'GPN';
  } else if (inputField.value.startsWith('9704')) {
    return 'Napas';
  } else if (inputField.value.startsWith('3')) {
    return 'China T-Union';
  } else if (inputField.value.startsWith('6')) {
    return 'China UnionPay';
  } else {
    return 'Unknown Brand';
  }
}


// execute a function when the user presses 'Enter' on the keyboard
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});


const handleLuhnAlgo = () => {
  const numberedInput = inputField.value
    .replace(/\s+/g, '')
    .split('')
    .slice(0, -1)
    .reverse()
    .map(Number)
    .map((num, idx) => idx % 2 === 0 ? num * 2 : num) 
    .map(x => x > 9 ? x - 9 : x)
    .reduce((a, b) => a + b, 0)
  console.log(numberedInput);
}

btn.onclick = handleLuhnAlgo;

// displays result on the screen
// btn.addEventListener('click', () => {
//   if (inputField.value.length >= 13 + 8) {
//     result.innerHTML = `<h5 class="valid"> √ ${inputField.value} is a valid Credit Card/Debit Card Number.</h4><br>
//                       <p class="valid">  <i>√</i>  The card brand code: <b>${handleBrand()}</b></p>
//                       <p class='valid'>  <i>√</i>   The card has a correct length</p>
//                       <p class="valid">  <i>√</i>  The card has a valid checksum<p>`
//   } else {
//     result.innerHTML = `<h5 class="invalid">X Card number too short, enter full card number.</h5>`
//   }
//   if(inputField.value.length < 13 + 8) {
//     result.innerHTML = `<h5 class="invalid">X Card number too short, enter full card number.</h5>`;
//   }
// }
// )







