/* 
functions for each button 

0 - 9 will display in the label

select a first number, store this number in a variable
select an arithmetic operator
select a second number
if user selects arithmetic operator again 
calculate both numbers and use result as the first number

if user selects = , calulate both numbers and display result
result should be stored in a global variable

clear button should clear everything

toNegative button turns number negative

modulo button returns the remainder
*/

let myLabel = document.querySelector('.inputContainer label');
let firstNum = '';
let secondNum = '';
let result = '';
let currentOperator = '';

let currentEquation = {
    firstNumber: 0,
    operator: '' 
}

//retrieve buttons from 0 - 9 
const numBtns = document.querySelectorAll('.myNumBtn');

numBtns.forEach(btn =>{
   btn.addEventListener('click', (e)=>{
       if(currentOperator === ''){
           console.log('selecting first number')
           console.log(e.target.innerText);
           firstNum += e.target.innerText;
       } else {
        console.log('selecting second number')
        console.log(e.target.innerText);
           secondNum += e.target.innerText;
       }
    // console.log(e.target.innerText)
    // displayLabel(e)
   });
});


function displayLabel(e){
    myLabel.innerText += e.target.innerText;
    
}



//clear label btn
const clearLabel = document.querySelector('.clear');
clearLabel.addEventListener('click', clear)
function clear(){
    myLabel.innerText = '';
    firstNum = '';
    secondNum = ''
    currentOperator = ''
}

// turn current number negative
const toNegative = document.querySelector('.negativeNum');

toNegative.addEventListener('click', ()=>{
    alert('now negative')
})

const modulo = document.querySelector('.mod');

modulo.addEventListener('click', ()=>{
    alert('modulo')
})

//retrieve all arithmetic operations
const myOperators = document.querySelectorAll('.myOperator');

myOperators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        // firstNum = +myLabel.innerText;
        currentOperator = e.target.innerText;
        myLabel.innerText = '';
        console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}`);
    })
})


// calculate equation

const calculateBtn = document.querySelector('.calculate');
calculateBtn.addEventListener('click', calculate)

function calculate(){
    console.log(`First Number ${firstNum}, Operator ${currentOperator}, second number ${secondNum}`)

    if(firstNum == '' || currentOperator == '' || secondNum == ''){
        myLabel.innerText = 'error'
    } else {
        console.log('HERE')
        switch(currentOperator){
            case '+':
                console.log(add(+firstNum, +secondNum))
            break;
            case '-':
                console.log(substract(+firstNum, +secondNum))
            break;
            case 'x':
            case '*':
                console.log(multiply(+firstNum, +secondNum))   
            break; 
            case '/':
                console.log(divide(+firstNum, +secondNum))    
            break;
        }
    }


}


//functions for each arithmetic operation
function add(num1, num2){
    let result = num1 + num2;
    console.log(result)
    return result;
}

function substract(num1, num2){
    let result = num1 - num2;
    console.log(result)
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    console.log(result)
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    console.log(result)
    return result;
}