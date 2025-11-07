
// -------------------------------------------------
// Add Money Box
// -------------------------------------------------

document.getElementById('addmoney-box').addEventListener('click', function () {

    document.getElementById('addmoney-box').style.borderColor = 'blue'
    document.getElementById('cashout-box').style.borderColor = '';
    document.getElementById('transfer-money-box').style.borderColor = '';
    document.getElementById('get-bonus-box').style.borderColor = '';
    document.getElementById('pay-bill-box').style.borderColor = '';
    document.getElementById('transaction-box').style.borderColor = '';






    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('bonus-cupon-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';





    document.getElementById('addmoney-section').style.display = 'block';
})


// -------------------------------------------------
// Cash Out Box
// -------------------------------------------------

document.getElementById('cashout-box').addEventListener('click', function () {

    document.getElementById('addmoney-box').style.borderColor = ''
    document.getElementById('cashout-box').style.borderColor = 'blue';
    document.getElementById('transfer-money-box').style.borderColor = '';
    document.getElementById('get-bonus-box').style.borderColor = '';
    document.getElementById('pay-bill-box').style.borderColor = '';
    document.getElementById('transaction-box').style.borderColor = '';

    document.getElementById('addmoney-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('bonus-cupon-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';





    document.getElementById('cashout-section').style.display = 'block';

})



// -------------------------------------------------
// Transfer Money Box with reusable function used
// -------------------------------------------------

document.getElementById('transfer-money-box').addEventListener('click', function () {

    document.getElementById('addmoney-box').style.borderColor = ''
    document.getElementById('cashout-box').style.borderColor = '';
    document.getElementById('transfer-money-box').style.borderColor = 'blue';
    document.getElementById('get-bonus-box').style.borderColor = '';
    document.getElementById('pay-bill-box').style.borderColor = '';
    document.getElementById('transaction-box').style.borderColor = '';



    toggleHandle("addmoney-section", "none");
    toggleHandle('cashout-section', 'none');
    toggleHandle('bonus-cupon-section', 'none');
    toggleHandle('pay-bill-section', 'none');
    toggleHandle('transaction-section', 'none')




    toggleHandle('transfer-money-section', 'block');
})

// document.getElementById('transfer-money-box').addEventListener('click', function () {

//     document.getElementById('addmoney-section').style.display = 'none';
//     document.getElementById('cashout-section').style.display = 'none';

//     document.getElementById('transfer-money-section').style.display = 'block';
// })



// -------------------------------------------------
// Get Bonus Box with reusable function used
// -------------------------------------------------

document.getElementById('get-bonus-box').addEventListener('click', function () {

    document.getElementById('addmoney-box').style.borderColor = ''
    document.getElementById('cashout-box').style.borderColor = '';
    document.getElementById('transfer-money-box').style.borderColor = '';
    document.getElementById('get-bonus-box').style.borderColor = 'blue';
    document.getElementById('pay-bill-box').style.borderColor = '';
    document.getElementById('transaction-box').style.borderColor = '';




    toggleHandle('addmoney-section', 'none');
    toggleHandle('cashout-section', 'none');
    toggleHandle('transfer-money-section', 'none');
    toggleHandle('pay-bill-section', 'none');
    toggleHandle('transaction-section', 'none')




    toggleHandle('bonus-cupon-section', 'block');


})


// -------------------------------------------------
// Pay Bill Box with reusable function used
// -------------------------------------------------


document.getElementById('pay-bill-box').addEventListener('click', function () {

    document.getElementById('addmoney-box').style.borderColor = ''
    document.getElementById('cashout-box').style.borderColor = '';
    document.getElementById('transfer-money-box').style.borderColor = '';
    document.getElementById('get-bonus-box').style.borderColor = '';
    document.getElementById('pay-bill-box').style.borderColor = 'blue';
    document.getElementById('transaction-box').style.borderColor = '';


    toggleHandle('addmoney-section', 'none');
    toggleHandle('cashout-section', 'none');
    toggleHandle('transfer-money-section', 'none');
    toggleHandle('bonus-cupon-section', 'none');
    toggleHandle('transaction-section', 'none')


    toggleHandle('pay-bill-section', 'block')

})


// -------------------------------------------------
// Transaction Box with reusable function used
// -------------------------------------------------

document.getElementById('transaction-box').addEventListener('click', function () {

    document.getElementById('transaction-box').style.borderColor = 'blue';


    document.getElementById('pay-bill-box').style.borderColor = '';
    document.getElementById('get-bonus-box').style.borderColor = '';
    document.getElementById('addmoney-box').style.borderColor = ''
    document.getElementById('cashout-box').style.borderColor = '';
    document.getElementById('transfer-money-box').style.borderColor = '';

    toggleHandle('addmoney-section', 'none');
    toggleHandle('cashout-section', 'none');
    toggleHandle('transfer-money-section', 'none');
    toggleHandle('bonus-cupon-section', 'none');
    toggleHandle('pay-bill-section', 'none');


    toggleHandle('transaction-section', 'block')

})


