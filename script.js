//Most of these variable allow us to watch the screen for click activity and then process it.
const screen = document.querySelector('.screen');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.division');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear'); 
const zero = document.querySelector('.zero');

one.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let added = "1";
    screen.textContent += added;
});

two.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let two = "2";
    screen.textContent += two;
});

three.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let three = "3";
    screen.textContent += three;
});

four.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let four = "4";
    screen.textContent += four;
});

five.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let five = "5";
    screen.textContent += five;
});

six.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let six = "6";
    screen.textContent += six;
});

seven.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let seven = "7";
    screen.textContent += seven;
});

eight.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let eight = "8";
    screen.textContent += eight;
});

nine.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let nine = "9";
    screen.textContent += nine;
});

zero.addEventListener('click', ()=> {
    const screen = document.querySelector('.screen');
    let zero = "0";
    screen.textContent += zero;
});

clear.addEventListener('click', () => {
    let screen = document.querySelector('.screen')
    let mini = document.querySelector('.equation');
    screen.textContent = "";
    mini.textContent = "";
});

plus.addEventListener('click', ()=> {
    let screen = document.querySelector('.screen');
    let mini = document.querySelector('.equation');
    var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    var2 = "+";
    mini.textContent = var1 + var2;
    screen.textContent = "";
    operate(var1,var2);
});

minus.addEventListener('click', ()=> {
    let screen = document.querySelector('.screen');
    let mini = document.querySelector('.equation');
    var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    var2 = "-";
    mini.textContent = var1 + var2;
    screen.textContent = "";
    operate(var1,var2);
});

multiply.addEventListener('click', ()=> {
    let screen = document.querySelector('.screen');
    let mini = document.querySelector('.equation');
    var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    var2 = "*";
    mini.textContent = var1 + var2;
    screen.textContent = "";
    operate(var1,var2);
});

divide.addEventListener('click', ()=> {
    let screen = document.querySelector('.screen');
    let mini = document.querySelector('.equation');
    var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    var2 = "/";
    mini.textContent = var1 + var2;
    screen.textContent = "";
    operate(var1,var2);
});
let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    var3 = document.querySelector('.screen');
    var3 = parseInt(var3.textContent);
    operate(var1,var2,var3); 
});

function operate(var1,var2,var3){
    let mini = document.querySelector('.equation')
        mini.textContent = var1 + var2 + var3;
        switch(var2){
            case "+":
                add(var1,var3);
                break;
            case "-":
                subtract(var1,var3);
                break;
            case "*":
                multiplication(var1,var3);
                break;
            case "/":
                division(var1,var3);
                break;
        }
}

function add(var1,var3){
            console.log(var1,var3);
            let screen = document.querySelector('.screen');
            let answer =var1 + var3;
            screen.textContent = answer;
}

function subtract(var1,var3){
    console.log(var1,var3);
    let screen = document.querySelector('.screen');
    let answer =var1 - var3;
    screen.textContent = answer;
}

function multiplication(var1,var3){
    console.log(var1,var3);
    let screen = document.querySelector('.screen');
    let answer =var1 * var3;
    screen.textContent = answer;
}

function division(var1,var3){
    console.log(var1,var3);
    let screen = document.querySelector('.screen');
    let answer =var1 / var3;
    screen.textContent = answer;
}

function add(var1,var3){
    console.log(var1,var3);
    let screen = document.querySelector('.screen');
    let answer =var1 + var3;
    screen.textContent = answer;
}
