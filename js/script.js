const btn1 = document.querySelector("#tab-btn-1")
const btn2 = document.querySelector("#tab-btn-2")
const btn3 = document.querySelector("#tab-btn-3")
const btn4 = document.querySelector("#tab-btn-4")
const btn5 = document.querySelector("#tab-btn-5")
const btn6 = document.querySelector("#tab-btn-6")
const btn7 = document.querySelector("#tab-btn-7")
const btn8 = document.querySelector("#tab-btn-8")
const all = document.querySelector("#tab-btn-9")

btn1.addEventListener('click', () => openTab(1))
btn2.addEventListener('click', () => openTab(2))
btn3.addEventListener('click', () => openTab(3))
btn4.addEventListener('click', () => openTab(4))
btn5.addEventListener('click', () => openTab(5))
btn6.addEventListener('click', () => openTab(6))
btn7.addEventListener('click', () => openTab(7))
btn8.addEventListener('click', () => openTab(8))
all.addEventListener('click', () => openTab(9))

let tabContent = document.querySelector('#tab-content-1') 

function openTab(tabNumber){
    tabContent.classList.add('tab-content-hide') //Добавляем класс и скрываем котент предыдущей вкладки
    tabContent = document.querySelector('#tab-content-' + tabNumber) //меняем значение переменной на контент текущей вкладки
    tabContent.classList.remove('tab-content-hide') //удалем класс чтобы показать контент текущей вкладки
}


