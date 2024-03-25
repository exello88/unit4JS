//TASK1
function f1(arr) {
    const out1 = document.querySelector('.out-1');
    for (let i = 0; i < arr.length; i++) {
        out1.textContent += arr[i] + ' ';
    }
}
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    let a1 = [1, 2, 3, 4, 5, 6, 7,];
    f1(a1);
})
//TASK2
function f2(arr) {
    const out2 = document.querySelector('.out-2');
    for (let i = 0; i < arr.length; i++) {
        out2.textContent += i + ' ' + arr[i] + ' ';
    }
}
const btn2 = document.querySelector('.b-2');
btn2.addEventListener('click', () => {
    let a2 = [1, 2, 3, 4, 5, 6, 7,];
    f2(a2);
})
//TASK3
function f3() {
    const out3 = document.getElementsByClassName('out-3');
    for (let i = 0; i < out3.length; i++) {
        out3[i].textContent = 3;
    }
}
const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    f3();
})
//TASK4
function f4() {
    const out4 = document.querySelectorAll('.out-4');
    out4.forEach((element) => {
        element.textContent = 4;
    });
}
const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    f4();
})
//TASK5
function f5(arr) {
    const out5 = document.querySelector('.out-5');
    for (let element of arr) {
        if (+element > 7) {
            out5.textContent += element + ' ';
        }
    }
}
const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    let a5 = [1, 42, 13, 3, 4, 41212, 5, 67];
    f5(a5);
})
//TASK6
function f6(arr) {
    const out6 = document.querySelector('.out-6');
    let arrRes = [];
    for (let element of arr) {
        element.forEach(element2 => {
            arrRes.push(element2);
        });
    }
    arrRes.forEach(element => {
        out6.textContent += element + ' ';
    });
}
const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    let a6 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    f6(a6);
})
//TASK7
function f7(arr) {
    let Res = {};
    for (let i = 0; i < arr.length; i++) {
        Res[arr[i].id]=arr[i].name
    }
    return Res;
}
const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    let a7 = [
        { id: 23, name: 'ivan' },
        { id: 45, name: 'petr' },
    ];
    let res = f7(a7);
});
//TASK8
function f8(arr) {
    let Res = [];
    for (let i = 0; i < arr.length; i++) {
        Res.push(arr[i].id);
    }
    return Res;
}
const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    let a8 = [
        { id: 23, name: 'ivan' },
        { id: 45, name: 'petr' },
    ];
    let res = f8(a8);
});
//TASK9
function f9(arr) {
    let length = 0;
    arr.forEach(element => {
        if (length < element.length - 1) {
            length = element.length - 1;
        }
    });
    return length;
}
const btn9 = document.querySelector('.b-9');
btn9.addEventListener('click', () => {
    const out9 = document.querySelector('.out-9');
    let a9 = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    let res = f9(a9);
    out9.textContent = res;
});
//TASK10
function f10(arr) {
    let res = {};
    arr.forEach(element => {
        res[element] = element;
    });
    return res;
}
const btn10 = document.querySelector('.b-10');
btn10.addEventListener('click', () => {
    let a10 = [2, 3, 4, 'hello'];
    let res = f10(a10);
});

//TASK11
function f11(arr) {
    const out11 = document.querySelector('.out-11');
    for (let element in arr) {
        if (arr[element] > 10) {
            out11.textContent += ' ' + arr[element];
        }
    }
}
const btn11 = document.querySelector('.b-11');
btn11.addEventListener('click', () => {
    let a11 = {
        0: 9,
        1: 20,
        2: 3,
        3: 44,
    };
    f11(a11);
});
//TASK12
function f12(arr) {
    const out12 = document.querySelector('.out-12');
    for (let element of arr) {
        out12.textContent += ' ' + element;
    }
}
const btn12 = document.querySelector('.b-12');
btn12.addEventListener('click', () => {
    let a12 = ['hello', 'world'];
    f12(a12);
});
//TASK13
function f13(arr) {
    const out13 = document.querySelector('.out-13');
    for (let element of arr) {
        for (let i = 0; i < element.length; i++) {
            out13.textContent += ' ' + element[i];
        }
    }
}
const btn13 = document.querySelector('.b-13');
btn13.addEventListener('click', () => {
    let a13 = ['hello', 'world'];
    f13(a13);
});
//TASK14
function f14(arr) {
    const out14 = document.querySelector('.out-14');
    for (let element of arr) {
        out14.textContent += ' ' + element;
    }
}
const btn14 = document.querySelector('.b-14');
btn14.addEventListener('click', () => {
    let a14 = ['hello', 'world'];
    f14(a14);
});
//TASK15
function f15() {
    const nodeList = document.querySelectorAll('.out-15');
    for (let element of nodeList) {
        element.textContent = 15;
    }
}
const btn15 = document.querySelector('.b-15');
btn15.addEventListener('click', () => {
    f15();
});