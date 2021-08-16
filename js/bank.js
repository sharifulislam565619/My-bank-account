document.getElementById("deposit-button").addEventListener("click", function () {
    // New input deposit
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value;
    const newDeposit = parseFloat(depositInputValue);

    // Previous total balance
    const balance = document.getElementById("balance");
    const totalPreviousBalance = balance.innerText;
    const totalBalance = parseFloat(totalPreviousBalance)

    // Previous  deposit
    const depositMoney = document.getElementById("deposit-money");
    const dd = depositMoney.innerText;
    const depositPrevMoney = parseFloat(dd)

    //Summation of deposit and total balance
    depositMoney.innerText = depositPrevMoney + newDeposit;
    balance.innerText = totalBalance + newDeposit

    // clear input
    depositInput.value = "";
})

// Calculation withdraw:
document.getElementById("withdraw-button").addEventListener("click", function () {
    //get input withdraw:
    const withdraw = document.getElementById("withdraw-quantity");
    const withdrawQuantity = parseFloat(withdraw.value);

    // total withdraw:
    const withdrawBalance = document.getElementById("withdraw-money");
    const totalWithdraw = parseFloat(withdrawBalance.innerText);

    // Calculation of withdraw:
    withdrawBalance.innerText = withdrawQuantity + totalWithdraw;

    //After withdraw:
    const balance = document.getElementById("balance");
    const totalBalance = parseFloat(balance.innerText)
    balance.innerText = totalBalance - withdrawQuantity;

    // clear input:
    withdraw.value = "";
})