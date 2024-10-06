import './styles.css';

//  дисплей
let display = document.querySelector('.display');

// история вычислений
let history = '';


// массив с данными (числа и дробные знаменатели)
let buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

// массив с операциями
let operators = ['+', '-', 'X', '/'];

// переменные для составления математического выражения
let a = '';
let b = '';
let sign = '';
let finish = false;

// переменные для функции смены темы
let content = document.querySelector('main');
let themeButton = document.querySelector('.theme-button');

// обработчик с функцией очистки выражения
document.querySelector('.ac').addEventListener('click', () => {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = "0";
});

// обработчик на кнопки
document.querySelector('.buttons').addEventListener('click', (evt) => {
    // курсор исчезает на пространстве за кнопками
    if (!evt.target.classList.contains('button')) return;  

    // подготовка выражения с помощью конкатенации    
    let button = evt.target.textContent;

    // Обновление истории
    if (buttons.includes(button)) {
        if (b === '' && sign === '') {
            if (a === "0" && button !== ".") {
                a = '';
            }
            if (a.length < 10) {
                a += button;
                display.textContent = a;
            }
        } else if (a !== '' && b !== '' && finish) {
            b = button;
            finish = false;
            display.textContent = b;
        } else {
            if (b === "0" && button !== ".") {
                b = '';
            }
            if (b.length < 10) {
                b += button;
                display.textContent = b;
            }
        }
        // Обновляем историю
        history += button;
        document.querySelector('.history').textContent = history;
    }

    // Смена знака
    if (evt.target.classList.contains('plus-minus')) {
        if (b !== '') {
            b = -Number(b); 
            display.textContent = b;  
        } else if (a !== '') {
            a = -Number(a); 
            display.textContent = a;  
        } 
    }

    // вычисление процента
    if (evt.target.classList.contains('percentage')) {
        if (b === "" && sign === "") {
            a = Number(a) / 100; 
            display.textContent = a; 
            if (String(a).length > 10) {
                display.textContent = 'Infinity'; 
            }
        } else if (a !== "" && b !== "") {
            b = (Number(a) * Number(b)) / 100; 
            display.textContent = b; 
            if (String(b).length > 10) {
                display.textContent = 'Infinity'; 
            }
        }
        return;
    }

    // вывод оператора на экран
    if (operators.includes(button)) {
        sign = button;
        display.textContent = sign;
        return;
    }

    // вычисления
    if (button === '=') {
        if (b === '') { b = a; }
        switch (sign) {
            case "+":
                a = Number(a) + Number(b);
                break;
            case "-":
                a = Number(a) - Number(b);
                break;
            case "X":
                a = Number(a) * Number(b);
                break; 
            case "/": 
                if (b === '0') {
                    display.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = Number(a) / Number(b);
                break;
        }
        // проверка вычисления на длину
        if (String(a).length <= 10) {
            finish = true;
            display.textContent = a; 
        } else {
            finish = true;
            display.textContent = 'Infinity';    
        }
    }
});

