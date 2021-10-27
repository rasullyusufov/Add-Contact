
const form = document.getElementById('form')
const contactName = document.getElementById('Contactname')
const contactNumber = document.getElementById('Number')
const row = document.getElementById('row')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameEl = contactName.value
    const numberEl = contactNumber.value

    contactName.value = ' ',
        contactNumber.value = ' '

    //addcontact
    if (nameEl == "" && numberEl == "") {
        showAlert("Ism va raqam kiritilmadi", "warning")

        contactNumber.classList.add("shadowimput")
        contactName.classList.add("shadowimput")
        setTimeout(() => {
            contactNumber.classList.remove("shadowimput")
            contactName.classList.remove("shadowimput")
        }, 2000);
    }
    else {
        const header = document.createElement('div')
        header.classList.add("col-md-3")
        header.innerHTML = `
    
    <div class="card p-2  m-2 shadow-lg border-0 raunded-3">
        <h5> <i class="bi bi-person-circle p-1"></i>${nameEl ? nameEl : "Ism kiritilmadi"}</h5>
        <p> <i class="bi bi-telephone p-1"></i> ${numberEl ? numberEl : "Raqam kiritilmadi !"}</p>
        <button class="btn btn-outline-danger "> Delete</button>
    </div>
    
    `
        row.appendChild(header)
        showAlert("Add contact", "success")
    }
})

//Delete contact
document.addEventListener('click', (e) => {
    if (e.target.classList.value == 'btn btn-outline-danger ') {
        const deleteBtn = document.querySelector('.btn-outline-danger')
        deleteBtn.parentElement.parentElement.remove()
        showAlert("Remove Contact", "danger")
    }
})


function showAlert(massage, type) {
    const alert = document.querySelector('address')
    const span = document.createElement('span')
    span.innerHTML = `
    <div class='alert alert-${type}'  role="alert">
  ${massage}
</div>
    `
    alert.appendChild(span)

    setTimeout(() => {
        span.remove()
    }, 3000);
}