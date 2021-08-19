

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);

    return productNumber;
}


function totalCalculation() {

    const phoneTotal = getInputValue('phone') * 1219;
    const casetotal = getInputValue('case') * 59;
    
    const subTotal = phoneTotal + casetotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}

function udpadeProductOrder(product, price) {

    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    productNumber = parseInt(productNumber) + 1;

    productInput.value = productNumber;

    const productPrice = document.getElementById(product + '-total');
    let productTotal = productNumber * price;

    productPrice.innerText = productTotal;
    
    totalCalculation();
    
}

function decreaseProductOrder(product, price) {
    
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    const productPrice = document.getElementById(product + '-total');
    let initialPrice = parseInt(productPrice.innerText);

    

    if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
        productInput.value = productNumber;

        let productTotal =  initialPrice - price;

        productPrice.innerText =  productTotal;
        
    }
    
    totalCalculation();
}


document.getElementById('phone-plus').addEventListener('click', function () {
   
    udpadeProductOrder('phone', 1219);
    
});

document.getElementById('phone-minus').addEventListener('click', function () {
   
    decreaseProductOrder('phone', 1219);
   
});

document.getElementById('case-plus').addEventListener('click', function () {
   
    udpadeProductOrder('case', 59);
    
});

document.getElementById('case-minus').addEventListener('click', function () {
   
    decreaseProductOrder('case', 59);
   
});


