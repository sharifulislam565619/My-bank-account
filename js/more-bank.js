function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputIdValue = parseFloat(input.value);
    input.value = '';
    return inputIdValue;
}

function getBalance(prevBalance, newBalance) {
    const previousBalance = document.getElementById(prevBalance);
    const previousBalanceValue = parseFloat(previousBalance.innerText);
    previousBalance.innerText = previousBalanceValue + newBalance;
}

function currentBalanceTotal(){
    const myCurrentBalance = document.getElementById("total-balance");
    const currentBalanceValue = parseFloat(myCurrentBalance.innerText);
    return currentBalanceValue;

}

function getTotalBalance(updateBalance, add) {
    const myCurrentBalance = document.getElementById("total-balance");
    const currentBalance=currentBalanceTotal()
    if (add == true) {
        myCurrentBalance.innerText = currentBalance + updateBalance;
    } else {
        myCurrentBalance.innerText = currentBalance - updateBalance;
    }
}


// deposit balance and total balance
document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInputValue = getInputValue("deposit-quantity");
    if (depositInputValue > 0) {
        getBalance("deposit-money", depositInputValue)
        getTotalBalance(depositInputValue, true)
    }
    if(depositInputValue < 0  ){
       document.getElementById("deposit-quantity").style.border="2px solid red"
    }



})

// withdraw balance after total Balance
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInputValue = getInputValue("withdraw-quantity");
    if (withdrawInputValue > 0 && currentBalanceTotal()>withdrawInputValue) {
        getBalance("withdraw-money", withdrawInputValue)
        getTotalBalance(withdrawInputValue, false)
    }
    
    if(currentBalanceTotal()<withdrawInputValue || withdrawInputValue<0){
        document.getElementById("withdraw-quantity").style.border="2px solid red"
     }

})