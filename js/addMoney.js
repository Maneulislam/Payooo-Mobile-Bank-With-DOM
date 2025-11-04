document.getElementById('btn-add-money').addEventListener('click', function (event) {

    event.preventDefault();

    const addAmountField = document.getElementById('add-amount-field');
    let addAmountFieldValue = addAmountField.value;
    const convertAddAmountFieldValue = parseFloat(addAmountFieldValue);

    let availableBalance = document.getElementById('main-balance').innerText;
    const convertAvailableBalance = parseFloat(availableBalance);


    // availableBalance = newBalance;


    const pin = document.getElementById('pin-field').value;

    if (addAmountFieldValue && pin) {
        if (pin === '1234') {
            let newBalance = convertAvailableBalance + convertAddAmountFieldValue;
            document.getElementById('main-balance').innerText = newBalance;
        }
        else {
            alert("Incorrect Password")
        }
    }
    else {
        alert('Invalid')
    }
})