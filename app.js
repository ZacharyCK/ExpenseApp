let expenses = []

const date = document.querySelector('#date')
const name = document.querySelector('#name')
const amount = document.querySelector('#amount')

const button = document.querySelector('#expense-button')

button.addEventListener('click', function(e) {
    const date = document.querySelector('#date')
    const name = document.querySelector('#name')
    const amount = document.querySelector('#amount')
    e.preventDefault()
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
    name.value = ''
    date.value = ''
    amount.value = ''
    // Event listener for delete button
    new_delete.addEventListener('click', function() {
        table.removeChild(new_row)
        expenses.splice(expenses.indexOf(new_entry), 1)
    })
})

function getObject(name, date, amount) {
    let object = {}

    object.name = name
    object.date = date
    object.amount = parseFloat(amount)

    return object
}