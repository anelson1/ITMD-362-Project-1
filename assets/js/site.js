"use strict";

console.log("I am not sure what to put here yet so here is a print statement");
var html = document.querySelector("html")

if(html.id === "shipping-page"){
    var form = document.querySelector('form[name="shippingform"');
    var elementList = document.querySelectorAll('#shippingform input');
} 
if(html.id === "shippingtype-page"){
    var form = document.querySelector('form[name="typeform"');
    var elementList = document.querySelectorAll('#typeform input');
}
if(html.id === "payment-page"){
    var form = document.querySelector('form[name="payform"');
    var elementList = document.querySelectorAll('#payform input');
}

form.addEventListener('submit', SubmitHandler);

function SubmitHandler(event){
    var target = event.target;
    event.preventDefault();
    var errorFlag = false;
    var invalidElementList = [];
    for (var i = 0, element; element = elementList[i++];) {
        if (element.value === "")
            errorFlag = true;
            invalidElementList.push(element);
    }
    console.log(invalidElementList);
    if(errorFlag){
        alert("Not all boxes are filled")
        var errorText = 'Please Fill Out Each Text Box';
        var errorEl = document.createElement('p');
        errorEl.id = 'error'
        errorEl.innerText = errorText;
        form.before(errorEl);
        
    }
    else{
        window.location.href = target.action;
    }
}