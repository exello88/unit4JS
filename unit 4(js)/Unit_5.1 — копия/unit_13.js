//TASK1
function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    return a1.two;
}
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    let res;
    res = f1();
    const out1 = document.querySelector('.out-1');
    out1.textContent = res;
});
//TASK2
function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };
    return a2.five;
}
const btn2 = document.querySelector('.b-2');
btn2.addEventListener('click', () => {
    let res;
    res = f2();
    const out2 = document.querySelector('.out-2');
    out2.textContent = res;
});
//TASK3
function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    return a3.four;
}
const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    let res;
    res = f3();
    const out3 = document.querySelector('.out-3');
    out3.textContent += ' ' + res;
});
//TASK4
function f4() {
    let a4 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    const out4 = document.querySelector('.out-4');
    Object.keys(a4).forEach((key) => {
        out4.innerHTML += key + ' ' + a4[key] + '<br>';
    });
}
const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    f4();
});
//TASK5
function f5(arr, out) {
    Object.keys(arr).forEach((key) => {
        out.innerHTML += key + ' ' + arr[key] + '<br>';
    });
}
const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    let a5 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    const out5 = document.querySelector('.out-5');
    f5(a5, out5);
});
//TASK6
let a6 = {};
function f6() {
    const out6 = document.querySelector('.out-6');
    const i61 = document.querySelector('.i-61').value;
    const i62 = document.querySelector('.i-62').value;
    a6[i61] = i62;
    f5(a6, out6);
}
const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    f6();
});
//TASK7
function f7(arr) {
    const out7 = document.querySelector('.out-7');
    const i7 = document.querySelector('.i-7').value;
    if (arr[i7] === undefined) {
        out7.textContent = '0';
    }
    else {
        out7.textContent = '1';
    }
}
const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    let a7 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f7(a7);
});
//TASK8
function f8(arr) {
    const out8 = document.querySelector('.out-8');
    const i8 = document.querySelector('.i-8').value;
    if (arr[i8] === undefined) {
        out8.textContent = '0';
    }
    else {
        out8.textContent = arr[i8];
    }
}
const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    let a8 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f8(a8);
});
//TASK9
function f9(arr) {
    const out9 = document.querySelector('.out-9');
    const i9 = document.querySelector('.i-9').value;
    Object.keys(arr).forEach((key) => {
        if (arr[key] === i9) {
            out9.textContent += ' ' + key;
        }
    });
}
const btn9 = document.querySelector('.b-9');
btn9.addEventListener('click', () => {
    let a9 = {
        "one1": "hello",
        "one2": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f9(a9);
});
//TASK10
function f10(arr, value) {
    const out10 = document.querySelector('.out-10');
    let check = false;
    Object.keys(arr).forEach((key) => {
        if (arr[key] === value) {
            check = true;
            out10.textContent = 'true';
        }
    });
    out10.textContent = check;
}
const btn10 = document.querySelector('.b-10');
btn10.addEventListener('click', () => {
    let a10 = {
        "one1": "hello",
        "one2": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f10(a10, 'mahaid');
});
//TASK11
function f11(arr) {
    const out11 = document.querySelector('.out-11');
    const i11 = document.querySelector('.i-11').value;
    delete arr[i11];
    out11.textContent = '';
    f5(arr, out11);
}
const btn11 = document.querySelector('.b-11');
btn11.addEventListener('click', () => {
    let a11 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f11(a11);
});
//TASK12
function f12(arr) {
    const out12 = document.querySelector('.out-12');
    const i12 = document.querySelector('.i-12').value;
    Object.keys(arr).forEach((key) => {
        if (arr[key] === i12) {
            delete arr[key];
        }
    });
    f5(arr, out12);
}
const btn12 = document.querySelector('.b-12');
btn12.addEventListener('click', () => {
    let a12 = {
        "one": "hello",
        "two": "mahai",
        "three": "world",
        "four": "hi"
    };
    f12(a12);
});
//TASK13
function f13(arr) {
    const out13 = document.querySelector('.out-13');
    let res = 0;
    Object.keys(arr).forEach((key) => {
        res += arr[key];
    });
    out13.textContent = res;
}
const btn13 = document.querySelector('.b-13');
btn13.addEventListener('click', () => {
    let a13 = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
    };
    f13(a13);
});
//TASK14
function f14(arr) {
    const out14 = document.querySelector('.out-14');
    arr.forEach((element) => {
        out14.textContent += ' ' + element[0];
    });
}
const btn14 = document.querySelector('.b-14');
btn14.addEventListener('click', () => {
    let a14 = [
        [1, 2, 3],
        [1, 2, 3],
        [34, 85, 423]
    ];
    f14(a14);
});
//TASK15
function f15(arr) {
    const out15 = document.querySelector('.out-15');
    arr.forEach((elementArr) => {
        elementArr.forEach((element) => {
            out15.textContent += ' ' + element;
        });
    });
}
const btn15 = document.querySelector('.b-15');
btn15.addEventListener('click', () => {
    let a15 = [
        [1, 2, 3],
        [1, 2, 3],
        [34, 85, 423]
    ];
    f15(a15);
});
//TASK16
function f16(arr) {
    const out16 = document.querySelector('.out-16');
    arr.forEach((elementArr) => {
        Object.keys(elementArr).forEach((key) => {
            if (key === 'name') {
                out16.textContent += ' ' + elementArr[key];
            }
        });
    });
}
const btn16 = document.querySelector('.b-16');
btn16.addEventListener('click', () => {
    let a16 = [
        {
            "name": 'Alex',
            "two": 2,
            "three": 3,
            "four": 4,
        },
        {
            "one": 1,
            "name": 'Nina',
            "three": 3,
            "four": 4,
        },
        {
            "one": 1,
            "two": 2,
            "name": 'Vlad',
            "four": 4,
        },
    ];
    f16(a16);
});
//TASK17
function f17(arr) {
    const out17 = document.querySelector('.out-17');
    arr.forEach((elementArr) => {
        if (elementArr.age > 30) {
            Object.keys(elementArr).forEach((key) => {
                out17.textContent += ' ' + elementArr[key];
            });
        }
    });
}
const btn17 = document.querySelector('.b-17');
btn17.addEventListener('click', () => {
    let a17 = [
        {
            "name": 'Alex',
            "age": 17,
        },
        {
            "name": 'Nina',
            "age": 35,
        },
        {
            "name": 'Vlad',
            "age": 38,
        },
    ];
    f17(a17);
});
//TASK18
function f18(arr) {
    const out18 = document.querySelector('.out-18');
    const i18 = document.querySelector('.i-18').value;
    let check = false;
    Object.keys(arr).forEach((key) => {
        if (key === i18) {
            arr[key].forEach((element) => {
                out18.textContent += ' ' + element;
                check = true;
            });
        }
    });
    if(!check){
        out18.textContent = '';
    }
}
const btn18 = document.querySelector('.b-18');
btn18.addEventListener('click', () => {
    let a18 = {
        "Московская": ['Малиновка', 'Петровщина', 'Михалово', 'Грушевка'],
        "Автозаводская": ['Могилевская', 'Автозоводская', 'Партизанская', 'Немига'],
    };
    f18(a18);
});
//TASK19
function f19(arr) {
    const out19 = document.querySelector('.out-19');
    const i19 = document.querySelector('.i-19').value;
    let check = false;
    Object.keys(arr).forEach((key) => {
        arr[key].forEach((element) => {
            if (element.toLowerCase() === i19.toLowerCase()) {
                out19.textContent = key;
                check=true;
            }
        });
    });
    if(!check){
        out19.textContent = '';
    }
}
const btn19 = document.querySelector('.b-19');
btn19.addEventListener('click', () => {
    let a19 = {
        "Московская": ['Малиновка', 'Петровщина', 'Михалово', 'Грушевка'],
        "Автозаводская": ['Могилевская', 'Автозоводская', 'Партизанская', 'Немига'],
    };
    f19(a19);
});
//TASK19
function f20(arr) {
    const out20 = document.querySelector('.out-20');
    Object.keys(arr).forEach((key) => {
        if (key === '2') {
            out20.textContent += ' ' + arr[key];
        }
    });    
}
const btn20 = document.querySelector('.b-20');
btn20.addEventListener('click', () => {
    let a20 = {
        "2": ['Малиновка', 'Петровщина', 'Михалово', 'Грушевка'],
        "0": ['Могилевская', 'Автозоводская', 'Партизанская', 'Немига'],
    };
    f20(a20);
});