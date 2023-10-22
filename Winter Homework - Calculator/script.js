let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btnMul = document.getElementById('btnMult');
let btnDiv = document.getElementById('btnDiv');
let btnSub = document.getElementById('btnSub');
let btnSum = document.getElementById('btnSum');
let btnDelete = document.getElementById('btnDel');
let decimal = document.getElementById('btnDec');
let equal = document.getElementById('btnEqual')
let c = document.getElementById('btnC');
let showResult = document.getElementById('showResult')


let value = ' ';
let value2 = ' ';
let flag = false;
let resultMul = ''
let resultDiv = ''
let resultSum = ''
let resultSub = ''
let operator

function getValue(button) {
    if(flag === false){
    value += button.innerHTML
    showResult.innerHTML = `<span>${value}</span>` 
    console.log(value)
    }
    else if (flag === true) {
    value2 += button.innerHTML
    showResult.innerHTML = `<span>${value2}</span>` 
    console.log(value2)
    console.log(value)
    }

}


function multiply(num1, num2){
    showResult.innerHTML = `<span>${'*'}</span>`
    resultMul = num1 * num2
    operator = '*'
}

function divide(num1,num2){
    showResult.innerHTML = `<span>${'/'}</span>`
    resultDiv = num1 / num2
    operator = "/"
 
}

function substract(num1, num2){
    showResult.innerHTML = `<span>${'-'}</span>`
    resultSub = num1 - num2
    operator = '-'
}

function summary(num1, num2){
    showResult.innerHTML = `<span>${'+'}</span>`
    resultSum = num1 + num2
    operator = '+'
}



function equalFunction(){
    let number1 = parseFloat(value)
    let number2 = parseFloat(value2)
    if(number1 > 9999999999 || number2 > 9999999999){
        showResult.innerHTML = `<span>Number is too large</span>`   
    } 
    
    else {

    if(operator == '*'){
        multiply(number1, number2)
        showResult.innerHTML = `<span>${resultMul}</span>`
        value2 = ' '
        value = resultMul;
    } 
    else if(operator == '/'){

        if(value2 == 0){
            showResult.innerHTML = `<span>ERROR, CAN'T DIVIDE BY 0</span>`
            value = ''
        }
        else {
            divide(number1, number2)
            showResult.innerHTML = `<span>${resultDiv}</span>`
            value2 = ' '
            value = resultDiv;
        }

    }
    else if(operator == '+'){
        summary(number1, number2)
        showResult.innerHTML = `<span>${resultSum}</span>`
        value2 = ' '
        value = resultSum;
    }

    else {
        substract(number1, number2)
        showResult.innerHTML = `<span>${resultSub}</span>`
        value2 = ' '
        value = resultSub;
    }

 }

}

function cleanNumber(){
    value = ' '
    value2 = ' '
    resultDiv = ' '
    resultMul = ' '
    resultSub = ' '
    resultSum = ' '
    showResult.innerHTML = ' '
}

function decimalNumber(){
    if(flag === false){
        value += '.'
        showResult.innerHTML = `<span>${value}</span>` 
        console.log(value)
        }
        else if (flag === true) {
        value2 += '.'
        showResult.innerHTML = `<span>${value2}</span>` 
        console.log(value2)
        console.log(value)
        }

}

btn0.addEventListener('click',function(){
    getValue(btn0)
})

btn1.addEventListener('click', function(){
    getValue(btn1)
})

btn2.addEventListener('click', function(){
    getValue(btn2)
})

btn3.addEventListener('click', function(){
    getValue(btn3)
})

btn4.addEventListener('click', function(){
    getValue(btn4)
})

btn5.addEventListener('click', function(){
    getValue(btn5)
})

btn6.addEventListener('click', function(){
    getValue(btn6)
})

btn7.addEventListener('click', function(){
    getValue(btn7)
})

btn8.addEventListener('click', function(){
    getValue(btn8)
})

btn9.addEventListener('click', function(){
    getValue(btn9)
})

btnMul.addEventListener('click', function(){
    multiply();
    flag = true
})

btnDiv.addEventListener('click', function(){
    divide();
    flag = true
})

btnSum.addEventListener('click', function(){
    summary();
    flag = true
})

btnSub.addEventListener('click', function(){
    substract();
    flag = true
})


equal.addEventListener('click', function(){
    equalFunction()
})

c.addEventListener('click', function(){
    cleanNumber()
})
decimal.addEventListener('click', function(){
    decimalNumber();
})