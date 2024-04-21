const inputField = document.getElementById('input');
const btn = document.querySelector('button');
const container = document.getElementById('card');
const result = document.getElementById('result');

const formatInput = () => {
  const nums = inputField.value.toString().replace(/[^\d]/g, '');

  //slices the string in to pieces to form card number
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
  let text = document.createElement('h1');
  text.innerHTML = inputField.value;
  result.appendChild(text);
}
)

