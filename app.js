let expenses = []

const date = document.querySelector('#date')
const name = document.querySelector('#name')
const amount = document.querySelector('#amount')

const button = document.querySelector('#expense-button')

let sum_of_expenses = 0.00
const sum = document.createElement('th')
const sum_label = document.createElement('th')
const sum_row = document.querySelector('#sum')
sum_label.textContent = 'Sum:'
sum.textContent = `$${sum_of_expenses}`
sum_row.appendChild(sum_label)
sum_row.appendChild(sum)

button.addEventListener('click', function(e) {
    e.preventDefault()
    
    const date = document.querySelector('#date')
    const name = document.querySelector('#name')
    const amount = document.querySelector('#amount')
    
    if(date.value !== '' && name.value !== '' && isNaN(parseFloat(amount.value)) === false) {
        // create object 
        let new_entry = getObject(name.value, date.value, amount.value)
        expenses.push(new_entry)
        // Create table row
        let new_row = document.createElement('tr')
        let new_name = document.createElement('td')
        let new_date = document.createElement('td')
        let new_amount = document.createElement('td')
        let new_delete = document.createElement('button')
        new_name.textContent = new_entry.name
        new_date.textContent = new_entry.date
        new_amount.textContent = `$${new_entry.amount}`
        new_delete.classList.add('delete')
        new_delete.setAttribute('id', 'delete')
        new_row.appendChild(new_name)
        new_row.appendChild(new_date)
        new_amount.appendChild(new_delete)
        new_row.appendChild(new_amount)
        let table = document.querySelector('#table-entries')
        table.appendChild(new_row)
        sum_of_expenses = (parseFloat(parseInt(sum_of_expenses * 100) + parseInt(new_entry.amount * 100)) / 100).toFixed(2)
        sum.textContent = `$${sum_of_expenses}`
        name.value = ''
        date.value = ''
        amount.value = ''
        // Event listener for delete button
        new_delete.addEventListener('click', function() {
            table.removeChild(new_row)
            sum_of_expenses = (parseFloat(parseInt(sum_of_expenses * 100) - parseInt(new_entry.amount * 100)) / 100).toFixed(2)
            sum.textContent = `$${sum_of_expenses}`
            expenses.splice(expenses.indexOf(new_entry), 1)
        })
    }
    else {
        alert('An input was incorrect')
    }
    
})

function getObject(name, date, amount) {
    let object = {}

    object.name = name
    object.date = date
    object.amount = (parseFloat(amount)).toFixed(2)

    return object
}