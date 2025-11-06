
// Reuseable Function


function getInputID(id) {

    const value = document.getElementById(id).value;
    let convertedValue = parseFloat(value);
    return convertedValue;
}


function getInputInnerText(id) {
    const mainBalance = document.getElementById(id).innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    return convertedMainBalance;
}


function toggleHandle(id, status) {
    document.getElementById(id).style.display = status;
}



// ----------------------------------------
// Transaction Reusable Add Money
// ----------------------------------------


function getHandlerAddMoney(btnId, numberFieldId, amountFieldId,) {
    document.getElementById(btnId).addEventListener('click', function (event) {
        event.preventDefault();

        const numberField = document.getElementById(numberFieldId).value;

        const amountField = document.getElementById(amountFieldId).value;

        const transactionContainer = document.getElementById('transaction-container');

        const form = document.createElement('form');

        form.classList.add('card-body', 'rounded-none', 'border',);


        form.innerHTML += `<p>Add Money ${amountField} Taka from 
        Bank Account Number: ${numberField} </p>`

        transactionContainer.appendChild(form);
    })
}




// ----------------------------------------
// Transaction Reusable Cash Out
// ----------------------------------------


function getHandlerCashOut(btnId, numberFieldId, amountFieldId,) {
    document.getElementById(btnId).addEventListener('click', function (event) {
        event.preventDefault();

        const numberField = document.getElementById(numberFieldId).value;

        const amountField = document.getElementById(amountFieldId).value;

        const transactionContainer = document.getElementById('transaction-container');

        const form = document.createElement('form');

        form.classList.add('card-body', 'rounded-none', 'border',);


        form.innerHTML += `<p>Cash Out ${amountField} Taka from 
        Agent Account Number: ${numberField} </p>`

        transactionContainer.appendChild(form);
    })
}



// ----------------------------------------
// Transaction Reusable Transfer Money
// ----------------------------------------


function getHandlerTransferMoney(btnId, numberFieldId, amountFieldId,) {
    document.getElementById(btnId).addEventListener('click', function (event) {
        event.preventDefault();

        const numberField = document.getElementById(numberFieldId).value;

        const amountField = document.getElementById(amountFieldId).value;

        const transactionContainer = document.getElementById('transaction-container');

        const form = document.createElement('form');

        form.classList.add('card-body', 'rounded-none', 'border',);


        form.innerHTML += `<p>Transfer Money ${amountField} Taka to Account Number: ${numberField} </p>`

        transactionContainer.appendChild(form);
    })
}




// ----------------------------------------
// Transaction Reusable Get Bonus
// ----------------------------------------


function getHandlerGetBonus(btnId, numberFieldId, amountFieldId,) {
    document.getElementById(btnId).addEventListener('click', function (event) {
        event.preventDefault();

        const numberField = document.getElementById(numberFieldId).value;

        const amountField = document.getElementById(amountFieldId).value;

        const transactionContainer = document.getElementById('transaction-container');

        const form = document.createElement('form');

        form.classList.add('card-body', 'rounded-none', 'border',);


        form.innerHTML += `<p>Get Bonus ${amountField} Taka</p>`

        transactionContainer.appendChild(form);
    })
}




// ----------------------------------------
// Transaction Reusable Pay Bill
// ----------------------------------------


function getHandlerPayBill(btnId, numberFieldId, amountFieldId,) {
    document.getElementById(btnId).addEventListener('click', function (event) {
        event.preventDefault();

        const numberField = document.getElementById(numberFieldId).value;

        const amountField = document.getElementById(amountFieldId).value;

        const transactionContainer = document.getElementById('transaction-container');

        const form = document.createElement('form');

        form.classList.add('card-body', 'rounded-none', 'border',);


        form.innerHTML += `<p>Pay Bill ${amountField} Taka </p>`

        transactionContainer.appendChild(form);
    })
}