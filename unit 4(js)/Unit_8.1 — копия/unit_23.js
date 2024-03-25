//TASK1
function t1() {
    const out1 = document.querySelector('.out-1');
    localStorage.setItem(5, 11);
    out1.textContent = localStorage.getItem(5);
}
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    t1();
});
//TASK2
function t2() {
    const out2 = document.querySelector('.out-2');
    let a2String = JSON.stringify([7, 6, 5]);
    localStorage.setItem('a2', a2String);
    out2.textContent = localStorage.getItem('a2');
}
const btn2 = document.querySelector('.b-2');
btn2.addEventListener('click', () => {
    t2();
});
//TASK3
function t3() {
    const out3 = document.querySelector('.out-3');
    let arr = JSON.parse(localStorage.getItem('a2'));
    Object.keys(arr).forEach((key) => {
        out3.innerHTML += key + ' ' + arr[key] + '<br>';
    });
}

const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    t3();
});
//TASK4
function t4() {
    const out4 = document.querySelector('.out-4');
    let arr = { "hello": "world", "hi": "mahai" };
    localStorage.setItem('a4', JSON.stringify(arr));
    Object.keys(localStorage.getItem('a4')).forEach((key) => {
        out4.textContent += ' ' + localStorage.getItem('a4')[key];
    });
}

const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    t4();
});
//TASK5
function t5() {
    const out5 = document.querySelector('.out-5');
    let arr = JSON.parse(localStorage.getItem('a4'));
    Object.keys(arr).forEach((key) => {
        out5.innerHTML += key + ' ' + arr[key] + '<br>';
    });
}

const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    t5();
});
//TASK6
function t6() {
    localStorage.clear();
}

const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    t6();
});
//TASK7
let a7 =[];
function t7() {
    const i7 = document.querySelector('.i-7').value;
    const out7 = document.querySelector('.out-7');
    a7[a7.length] = i7;
    localStorage.setItem('a7',a7);
    out7.textContent = localStorage.getItem('a7');
}

const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    t7();
});
//TASK8
function t8() {
    const out8 = document.querySelector('.out-8');
    a7.pop();
    localStorage.setItem('a7',a7);
    out8.textContent = localStorage.getItem('a7');
}

const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    t8();
});