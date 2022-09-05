const one = document.querySelector('#one');
const screen = document.querySelector('.screen');
const plus = document.querySelector('.plus')

one.addEventListener('mousedown', ()=> {
    mathOne();
});

plus.addEventListener('mousedown', ()=> {
    let screen = document.querySelector('.screen');
    let var1 = document.querySelector('.screen');
    var1 = parseInt(var1.textContent);
    screen.textContent = 0;
    let equals = document.querySelector('#equals');
    equals.addEventListener('mousedown', ()=> {
        let var2 = document.querySelector('.screen');
        var2 = parseInt(var2.textContent);
        console.log(var1,var2);
        addition(var1,var2);
        var1 = 0;
        var2 = 0;
    }); 
});

let mathOne = () => {
    let one = document.querySelector('#one');
    const screen = document.querySelector('.screen');
    one = 1;
    screen.textContent = `${one}`;
}

function addition(var1,var2){
    let answer = 0;
    let screen = document.querySelector('.screen');
    answer =var1 + var2;
    screen.textContent = `${answer}`
}

