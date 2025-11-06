
document.getElementById('btn-transfer-money').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getInputInnerText('main-balance');

    const numberField = document.getElementById('number-field-transfer-money').value;

    const amountField = getInputID('add-amount-field-transfer-money');

    const pin = getInputID('pin-field-transfer-money');

    if (amountField < 0) {
        alert('Invalid Amount')
        return;
    }

    if (mainBalance < amountField) {
        alert('Invalid Amount')
        return;
    }


    if (numberField.length === 11) {
        if (amountField) {
            if (pin === 1234) {
                let newBalance = mainBalance - amountField;
                document.getElementById('main-balance').innerText = newBalance;
            }
            else {
                alert('Incorrect PIN')
            }
        }
        else {
            alert('Invalid Amount')
        }
    }
    else {
        alert('Invalid Number')
    }
})