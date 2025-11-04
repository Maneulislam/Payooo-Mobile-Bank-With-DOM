
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();

    const numberField = document.getElementById('number-field').value;
    if (numberField.length === 11) {
        const pinField = document.getElementById('pin-field').value;
        if (pinField === '1234') {
            window.location.href = './main.html';
        }
        else {
            alert("Incorrect PIN")
        }
    }
    else {
        alert("Invalid Number");
    }
})