// Document Api
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

function convert() {
    const exchangeRateUSDtoVND = 26000;
    const exchangeRateUSDtoEUR = 0.87;
    const exchangeRateEURtoVND = 30000;
    if (fromCurrency.value === "USD" && toCurrency.value === "VND") {
        result.innerHTML = amount.value * exchangeRateUSDtoVND + "VND";
    } else if (fromCurrency.value === "VND" && toCurrency.value === "USD") {
        result.innerHTML = amount.value / exchangeRateUSDtoVND + "USD" ;
    } else if (fromCurrency.value === "USD" && toCurrency.value === "EUR") {
        result.innerHTML = amount.value * exchangeRateUSDtoVND + "EUR";
    } else if (fromCurrency.value === "EUR" && toCurrency.value === "USD") {
        result.innerHTML = amount.value / exchangeRateUSDtoEUR + "USD";
    } else if (fromCurrency.value === "EUR" && toCurrency.value === "VND") {
        result.innerHTML = amount.value * exchangeRateEURtoVND + "VND";
    } else if (fromCurrency.value === "VND" && toCurrency.value === "EUR") {
        result.innerHTML = amount.value / exchangeRateEURtoVND + "EUR";
    }
}
