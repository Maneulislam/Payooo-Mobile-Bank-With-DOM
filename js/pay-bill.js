


document.getElementById('btn-pay-bill').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getInputInnerText('main-balance');

    const numberField = document.getElementById('number-field-pay-bill').value;

    const amountField = getInputID('add-amount-field-pay-bill');

    const pin = getInputID('pin-field-pay-bill');

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