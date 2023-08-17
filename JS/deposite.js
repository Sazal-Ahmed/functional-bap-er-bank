


document.getElementById('d-btn').addEventListener('click', function(){

    const newDepositeAmount = getInputvalueByID('deposite-field');

    const  preDepositeTotal = getTextelementByID('d-text');
    const currentDepositTotal = preDepositeTotal + newDepositeAmount;
    setTextElementValueByID('d-text', currentDepositTotal );

    const prebalanceTotal  = getTextelementByID('b-total');
    const currentBalanceTotal = prebalanceTotal + newDepositeAmount;
    setTextElementValueByID('b-total', currentBalanceTotal );

})