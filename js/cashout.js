
document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();

    const amountField = document.getElementById('add-amount-field-cashout');
    let amountFieldValue = amountField.value;
    const convertAmountFieldValue = parseFloat(amountFieldValue);
    console.log(convertAmountFieldValue);


    let numberField = document.getElementById('number-field-cashout').value;
    const convertNumberField = parseInt(numberField);
    console.log(numberField);

    let availableBalance = document.getElementById('main-balance').innerText;
    const convertAvailableBalance = parseFloat(availableBalance);

    const pin = document.getElementById('pin-field-cashout').value;
    console.log(pin);

    if (availableBalance < convertAmountFieldValue) {
        alert('Invalid Amount')
        return;
    }



    if (convertAmountFieldValue && convertNumberField && pin) {
        if (pin === '1234') {
            let newBalance = convertAvailableBalance - convertAmountFieldValue;
            document.getElementById('main-balance').innerText = newBalance;

        }
        else {
            alert("Incorrect PIN")
        }
    }
    else {
        alert('Invalid')
    }


})