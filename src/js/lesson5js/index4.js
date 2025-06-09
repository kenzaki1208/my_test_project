// Document Api
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

function convert() {
    const exchangeRateUSDtoVND = 26000;
    if (fromCurrency.value === "USD" && toCurrency.value === "VND") {
        result.innerHTML = formatCurrency(amount.value * exchangeRateUSDtoVND) + "VND";
    } else if (fromCurrency.value === "VND" && toCurrency.value === "USD") {
        result.innerHTML = (amount.value / exchangeRateUSDtoVND).toFixed(2) + "USD" ;
    }
}

function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}