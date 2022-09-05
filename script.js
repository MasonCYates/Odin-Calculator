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
const multiply = document.querySelector('multiply');
const divide = document.querySelector('.division');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear'); 

one.addEventListener('mousedown', ()=> {
    const screen = document.querySelector('.screen');
    let added = "1";
    screen.textContent += added;
});

two.addEventListener('mousedown', ()=> {
    const screen = document.querySelector('.screen');
    let two = "2";
    screen.textContent += two;
});

three.addEventListener('mousedown', ()=> {
    const screen = document.querySelector('.screen');
    let three = "3";
    screen.textContent += three;
});

four.addEventListener('mousedown', ()=> {
    let four = document.querySelector('.four');
    const screen = document.querySelector('.screen');
    four = 4;
    screen.textContent = `${four}`;
});

clear.addEventListener('mousedown', () => {
    let screen = document.querySelector('.screen')
    let mini = document.querySelector('.equation');
    screen.textContent = "";
    mini.textContent = "";
});

plus.addEventListener('mousedown', ()=> {
    let screen = document.querySelector('.screen');
    let mini = document.querySelector('.equation');
    let var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    mini.textContent = var1 + "+"
    screen.textContent = "";
    let equals = document.querySelector('.equals');
    equals.addEventListener('mousedown', ()=> {
        let var2 = document.querySelector('.screen');
        let mini = document.querySelector('.equation')
        var2 = parseInt(var2.textContent);
        mini.textContent = var1 + "+" + var2;
        console.log(var1,var2);
        addition(var1,var2);
        var1 = 0;
        var2 = 0;
    }); 
});


function addition(var1,var2){
    let answer = 0;
    let screen = document.querySelector('.screen');
    answer =var1 + var2;
    screen.textContent = `${answer}`
}

