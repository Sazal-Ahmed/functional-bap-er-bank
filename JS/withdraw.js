

document.getElementById('w-btn').addEventListener('click', function(){

    const a = getInputvalueByID('Withdraw-field');

    const  b = getTextelementByID('w-total');
    const sum = b + a;
    setTextElementValueByID('w-total', sum );

    const c = getTextelementByID('b-total');
    const minus = c - a;
    setTextElementValueByID('b-total', minus );
})