
function getInputvalueByID(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldvaluestring = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldvaluestring);
    inputField.value = '';
    return inputFieldvalue;
    
}

//text element function

function getTextelementByID(elementID){
    const textElement = document.getElementById(elementID);
    const textValuestring = textElement.innerText;
    const textValue = parseFloat(textValuestring);
    return textValue;
}

//Set element function
function setTextElementValueByID(elementId, newValue){
    const textValueElement = document.getElementById(elementId);
    textValueElement.innerText = newValue;
}

