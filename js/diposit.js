document.getElementById('btn-Deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const priviousDepositTotalString = depositTotalElement.innerText;
    const priviousDepositTotal =parseFloat(priviousDepositTotalString);
    currentDepositTotal =priviousDepositTotal+newDepositAmount;
    depositTotalElement.innerText= currentDepositTotal;
    const balanceToatalElement =document.getElementById('balance-total');
    const priviousBalanceTotalString = balanceToatalElement.innerText;
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);
    const currentBalanceTotal=priviousBalanceTotal+newDepositAmount;
    balanceToatalElement.innerText=currentBalanceTotal;

    depositField.value = '';
})