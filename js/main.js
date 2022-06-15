const buttonPlus = document.querySelector('#counter-plus')
const buttonMinus = document.querySelector('#counter-minus')
const $counterValue = document.querySelector('#counter-value')
let currentValue = null

if (localStorage.getItem('currentValue')){
   currentValue = +localStorage.getItem('currentValue')
} else {
   localStorage.setItem('currentValue', 0)
   currentValue = 0
}

$counterValue.textContent = currentValue

function action(num){
   currentValue = currentValue + num
   localStorage.setItem('currentValue', currentValue)
   $counterValue.textContent = currentValue
}

buttonPlus.addEventListener('click', () => {
   action(1)
})

buttonMinus.addEventListener('click', () => {
   action(-1)
})