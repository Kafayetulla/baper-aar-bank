/* 
1.add  even  handlar with the withdrow button
2.get the withdraw amount form the withdrow input field
3.Get pervious withdrow total
4.Calculator withdrow total
4.5.set total withdrow amount 

5.get pervious total
6.calculator new balance total
6.5 set new balance total
7.clear input field
*/
// step1
document.getElementById('btn-withdrow').addEventListener('click',function(){
   //step2
   const withdrowField = document.getElementById('withdrow-field');
   const newWithdrowAmountString =withdrowField.value;
   const newWithdrowAmount =parseFloat(newWithdrowAmountString);
  //step3
  const withdrowTotalElement=document.getElementById('withdrow-total');
  const perviousWithdrowTotalStraing=withdrowTotalElement.innerText;
  const perviousWithdrowTotal = parseFloat(perviousWithdrowTotalStraing);
  //step4
  const currentWithdrowTotal =perviousWithdrowTotal+newWithdrowAmount;
  withdrowTotalElement.innerText=currentWithdrowTotal;

  //step5
  const balanceToatalElement=document.getElementById('balance-total');
  const priviousBalanceTotalString=balanceToatalElement.innerText;
  const priviousBalanceTotal =parseFloat(priviousBalanceTotalString);
//step6
const newBalanceTotal = priviousBalanceTotal-newWithdrowAmount;
balanceToatalElement.innerText=newBalanceTotal;
  //step7
  withdrowField.value ='';

})