const btn1 = document.querySelector("#tab-btn-1")
const btn2 = document.querySelector("#tab-btn-2")
const btn3 = document.querySelector("#tab-btn-3")
const btn4 = document.querySelector("#tab-btn-4")
const btn5 = document.querySelector("#tab-btn-5")
const btn6 = document.querySelector("#tab-btn-6")
const btn7 = document.querySelector("#tab-btn-7")
const btn8 = document.querySelector("#tab-btn-8")
const btn9 = document.querySelector("#tab-btn-9")

btn1.addEventListener('click', () => openTab2(1))
btn2.addEventListener('click', () => openTab2(2))
btn3.addEventListener('click', () => openTab2(3))
btn4.addEventListener('click', () => openTab2(4))
btn5.addEventListener('click', () => openTab2(5))
btn6.addEventListener('click', () => openTab2(6))
btn7.addEventListener('click', () => openTab2(7))
btn8.addEventListener('click', () => openTab2(8))
btn9.addEventListener('click', () => openTab2(9))

let tabContent = document.querySelector('#tab-content-1') 

function openTab2(tabNumber){
    tabContent.classList.add('tab-content-hide') //Добавляем класс и скрываем котент предыдущей вкладки
    tabContent = document.querySelector('#tab-content-' + tabNumber) //меняем значение переменной на контент текущей вкладки
    tabContent.classList.remove('tab-content-hide') //удалем класс чтобы показать контент текущей вкладки
}