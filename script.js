const inputField = document.getElementById('input');
const btn = document.querySelector('button');
const container = document.getElementById('card');
const result = document.getElementById('result');

const formatInput = () => {
    const nums = inputField.value.toString().replace(/[^\d]/g,'');
  
    //slices the string in to pieces to form card number
    let a = nums.slice(0,4);
    let b = nums.slice(4,8);
    let c = nums.slice(8,12)
    let d = nums.slice(12,16);
    let e = nums.slice(16);
    
    //formatting the input number
    return `${a} ${b} ${c} ${d} ${e}`
  }

  const formatter = () => {
    const formattedInput = formatInput(inputField.value);
    inputField.value = formattedInput;
  }

//displays result on the screen
// btn.addEventListener('click', () => {
//    let text = document.createElement('h1');
//    text.innerHTML = inputField.value;
//     result.appendChild(text);
// }
// )