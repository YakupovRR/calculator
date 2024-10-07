import './styles.css';

// дисплей
let display = document.querySelector('.display');

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

// Функция удаления последней цифры
let deleteNumber = () => {
    if (b !== '') {
        b = b.slice(0, -1); 
        display.textContent = b || '0';
    } else if (sign !== '') {
        a = a.slice(0, -1);
        display.textContent = a || '0'; 
    } else {
        a = a.slice(0, -1);
        display.textContent = a || '0'; 
    }
};

// обработчик с функцией удаления последней цифры на клавише Backspace
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace') {
        deleteNumber();
    }
});

// обработчик с функцией удаления последней цифры на кнопке DE
document.querySelector('.de').addEventListener('click', () => {
    deleteNumber();
})

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
    
    if (buttons.includes(button))  {  
        if (b === '' && sign === '') {
            if (a === "0" && button !== ".") {
                a = '';
            }
            if (String(a).length < 10) {
                a += button;
                display.textContent = a;
            }
            if (String(a).length >10) {
                a = String(a).slice(0, 10);
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
            if (String(b).length < 10) {
                b += button;
                display.textContent = b;
            }
            if (String(b).length >10) {
                b = String(b).slice(0, 10);
                display.textContent = b;
            }
        }
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
            if (String(a).length>10) {
                display.textContent = String(a).slice(0, 10); 
            }
        } else if (a !== "" && b !== "") {
            b = (Number(a) * Number(b)) / 100; 
            display.textContent = b; 
            if (String(b).length>10) {
                display.textContent = String(b).slice(0, 10); 
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
            display.textContent = String(a).slice(0, 10);    
        }
    }
});

// смена темы приложения
themeButton.addEventListener('click', ()=>{
    content.classList.toggle('light-theme');
    content.classList.toggle('dark-theme');
});