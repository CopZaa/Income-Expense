const input = document.querySelector('.enter-list')
const inBtn = document.querySelector('.income')
const exBtn = document.querySelector('.expense')
const list = document.querySelector('.page-overflow')
let sum = 0
document.getElementById("text").innerHTML = sum

function incomeSum(x) {
    sum = sum + parseInt(x)
    document.getElementById("text").innerHTML = sum
}
function expenseSum(x) {
    sum = sum - parseInt(x)
    document.getElementById("text").innerHTML = sum
}

inBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        const pageOverflow = document.querySelector('.page-overflow')
        let newIncome = document.createElement('div')
        newIncome.innerHTML = `
            <h1 class="inAdd"> ${input.value} </h1>
        `
        pageOverflow.appendChild(newIncome)
        incomeSum(input.value)
        input.value = ''
    } else {
        alert("Enter amount")
    }
})

exBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        const pageOverflow = document.querySelector('.page-overflow')
        let newIncome = document.createElement('div')
        newIncome.innerHTML = `
            <h1 class="exAdd"> ${input.value} </h1>
        `
        pageOverflow.appendChild(newIncome)
        expenseSum(input.value)
        input.value = ''
    } else {
        alert("Enter amount")
    }
})