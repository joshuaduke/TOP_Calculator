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
let result = 0;
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
        //    firstNum += e.target.innerText;
           firstNum += displayLabel(e);
       } else if(result !== 0) {
        firstNum = result;
        secondNum += displayLabel(e);
       } else {
        console.log('selecting second number')
        console.log(e.target.innerText);
        //    secondNum += e.target.innerText;
           secondNum += displayLabel(e);
       }
    // console.log(e.target.innerText)
    // displayLabel(e)
   });
});

function isDisplayEmpty(){
    if(myLabel.innerText !== ''){
        myLabel.innerText = '';
    }
}

function displayLabel(e){
    myLabel.innerText = '';
    myLabel.innerText += e.target.innerText;
    return myLabel.innerText;
}



//clear label btn
const clearLabel = document.querySelector('.clear');
clearLabel.addEventListener('click', clear)
function clear(){
    myLabel.innerText = '';
    firstNum = '';
    secondNum = '';
    result = 0;
    currentOperator = '';
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

// myOperators.forEach(operator => {
//     operator.addEventListener('click', (e) => {
//         if(result !== 0){
//             console.log('result present')
//             firstNum = result;
//             secondNum = '';
//             currentOperator = e.target.innerText;
//             myLabel.innerText = '';
//             console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}`);
//         } else if(firstNum && secondNum){
//             console.log('Two numbers present')
//             console.log(`result ${result}`)
//             calculate();
//             currentOperator = e.target.innerText;
//             myLabel.innerText = '';
//             console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}, second Number: ${secondNum}`);

//         } else {
//             console.log('first number')
//             currentOperator = e.target.innerText;
//             myLabel.innerText = '';
//             console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}`);
//         }
//     })
// })

myOperators.forEach(operator => {
    operator.addEventListener('click', (e) => {

        if(firstNum && secondNum){
            console.log('Two numbers present')
            console.log(`result ${result}`)
            
            calculate();
            
            firstNum = result;
            secondNum = '';
            currentOperator = e.target.innerText;
            // myLabel.innerText = '';
            console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}, second Number: ${secondNum}`);

        } else {
            console.log('first number')
            currentOperator = e.target.innerText;
            myLabel.innerText = '';
            console.log(`FirstNumber: ${firstNum}, type: ${typeof firstNum}, Operator: ${currentOperator}`);
        }
    })
})


// calculate equation

const calculateBtn = document.querySelector('.calculate');
calculateBtn.addEventListener('click', calculate)

function calculate(){
    console.log(`First Number ${firstNum}, Operator ${currentOperator}, second number ${secondNum}`)

    switch(currentOperator){
        case '+':
            console.log(add(+firstNum, +secondNum))
            myLabel.innerText = add(+firstNum, +secondNum);
            result = add(+firstNum, +secondNum);
            console.log(`Result : ${result}`)
            
        break;
        case '-':
            console.log(substract(+firstNum, +secondNum))
            myLabel.innerText = substract(+firstNum, +secondNum);
            result = substract(+firstNum, +secondNum);
        break;
        case 'x':
        case '*':
            console.log(multiply(+firstNum, +secondNum))  
            myLabel.innerText = multiply(+firstNum, +secondNum); 
            result = multiply(+firstNum, +secondNum);
        break; 
        case '/':
            console.log(divide(+firstNum, +secondNum))    
            myLabel.innerText = divide(+firstNum, +secondNum);
            result = divide(+firstNum, +secondNum);
        break;
    }


}


//functions for each arithmetic operation
function add(num1, num2){
    let result = num1 + num2;
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