const values = ["10K", "50K", "100K", "500k", "1M"]; //values to step to
const prices = ["8.00", "12.00", "16.00", "24.00", "36.00"];
const dicsountPrices = ["6.00", "8.00", "12.00", "18.00", "25.00"];

const input = document.getElementById("slider-input");
const output = document.getElementById("slider-value");
const price = document.getElementById("price-calculation");
const discount = document.getElementById("checkbox");

function updatePrice() {
    output.innerHTML = values[input.value - 1];

    if (discount.checked) {
        price.innerHTML = dicsountPrices[input.value - 1];
    } else {
        price.innerHTML = prices[input.value - 1];
    }
}

updatePrice();