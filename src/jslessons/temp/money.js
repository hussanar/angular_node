// display results after convertion
export function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
        ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}


// when user click on reset button
export function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};