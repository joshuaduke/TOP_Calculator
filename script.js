let inputlabel = document.querySelector('.inputContainer label');
let clearBtn = document.querySelector('.clear');
let btnOptions = document.querySelectorAll('.myNumBtn');

clearBtn.addEventListener('click', clearLabel)

function add(num1, num2){
    console.log(num1 + num2)
    return num1 + num2;
}

function substract(num1, num2){
    console.log(num1 - num2)
    return num1 - num2;
}

function multiply(num1, num2){
    console.log(num1 * num2)
    return num1 * num2;
}

function divide(num1, num2){
    console.log(num1 / num2)
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            add(num1, num2);
        break;
        case '-':
            substract(num1, num2);
        break;
        case '*':
            multiply(num1, num2);    
        break; 
        case '/':
            divide(num1, num2);    
        break;
    }
}

function clear(){

}

function selectOperator(){
    let operators = document.querySelectorAll('.myOperator');

}

btnOptions.forEach(btn => {
    btn.addEventListener('click', changeDisplay)
});

function changeDisplay(e){
    // 
    if(inputlabel.innerText == '0'){
        inputlabel.innerText = '' 
        console.log(e.target.innerText)
        if(inputlabel.innerText.length <= 9){
            inputlabel.innerText += e.target.innerText
        }
    } else {
        console.log(e.target.innerText)
        if(inputlabel.innerText.length <= 9){
            inputlabel.innerText += e.target.innerText
        }
    }
    
}



function clearLabel(){
    inputlabel.innerText = 0;
}

//user enters first number 
// user selects an operator
// first number is stored
// user selects a second number
//if user selects another operator, 
//display result of the first operation 