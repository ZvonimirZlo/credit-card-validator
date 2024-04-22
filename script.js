const inputField = document.getElementById('input');
const btn = document.querySelector('button');
const container = document.getElementById('card');
const result = document.getElementById('result');

const formatInput = () => {
  const nums = inputField.value.toString().replace(/[^\d]/g, '');

  //slices the input value to pieces to create card number form
  const partOne = nums.slice(0, 4);
  const partTwo = nums.slice(4, 8);
  const partThree = nums.slice(8, 12)
  const partFour = nums.slice(12, 16);
  const partFive = nums.slice(16, 19);

  //formatting the input number
  return `${partOne}  ${partTwo}  ${partThree}  ${partFour}  ${partFive}`;
}

const formatter = () => {
  const formattedInput = formatInput(inputField.value);
  inputField.value = formattedInput;
}

// displays result on the screen
btn.addEventListener('click', () => {
 if(inputField.value.length < 3){
  result.innerHTML = `<h4 class="valid"> √ ${inputField.value} is a valid Credit Card/Debit Card Number.</h4><br>
                      <p class='valid'>  √   The card has a correct length.</p>
                      <p class="valid">  √   The card has a valid checksum.<p>
                      <p class="valid">  √   The card brand code (Amex) is valid.</p>`
 }else{
  result.innerHTML = `<h4 class="invalid">X Invalid input, enter full card number.</h4>`
 }
}
)


