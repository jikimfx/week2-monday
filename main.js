const currencyTypes = {
    'USD':
    {
        'EUR': 0.924516,
        'VND': 23235.10,
        'KRW': 1222.87,
        'IDR': 14903.38
    },
    'EUR':
    {
        'USD': 1.08167,
        'VND': 25081.69,
        'KRW': 1322.94,
        'IDR': 16122.33
    },
    'IDR':
    {
        'USD': 0.0000670494,
        'EUR': 0.0000619805,
        'VND': 1.55580,
        'KRW': 0.0820002
    },
    'KRW':
    {
        'USD': 0.000817710,
        'EUR': 0.0000398267,
        'VND': 18.9611,
        'IDR': 12.1897
    },
    'VND':
    {
        'USD': 0.0000430707,
        'EUR': 0.83,
        'KRW': 0.0526660,
        'IDR': 0.641975
    },
}


let fromCurrency = document.getElementById('currency1');
let toCurrency = document.getElementById('currency2');
let amountConvert = document.getElementById('amountConvert');
let btn = document.getElementById("convertButton");

// let amountResult = amountConvert * currencyTypes[fromCurrency][toCurrency];

convertButton.addEventListener("click", () => {
    let amt = amountConvert.value;
    amt ? "" : alert("U must enter a number to convert");
    amt = parseInt(amt);
    let from = fromCurrency.value;
    let to = toCurrency.value;
    let result = (amt * currencyTypes[from][to]).toFixed(2);
    // console.log(result);
    let notification = showResult(to, result)
    document.getElementById("amountResult").innerHTML = `${parseInt(amt)} ${from}=${notification} ${to}`;
})

function convertCurrency() {
    let amount = document.getElementById('amount');
    let from = document.getElementById('currency1');
    let to = document.getElementById('currency2');
    let result = 0;

    result = (amount * currencyTypes[from][to]).toFixed(2);
}

function formatCurrency(type1, type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
        currency: type2,
        style: "currency"
    });
    return formatter.format(value);
}

const showResult = (to, result) => {
    let convertedResult = "";
    to === "USD" ? convertedValue = formatCurrency('en-US', "USD", result) : ""
    to === "EUR" ? convertedValue = formatCurrency('it-IT', "EUR", result) : ""
    to === "VND" ? convertedValue = formatCurrency('vi', "VND", result) : ""
    to === "KRW" ? convertedValue = formatCurrency('kr-KR', "KRW", result) : ""
    to === "IDR" ? convertedValue = formatCurrency('id-ID', "IDR", result) : ""
    return convertedResult;
}

/*
small tip for this class!
.toLowerCase() .toUpperCase()
it's JS buit in function

tip 2 . if you dont wana open console every time to see the result, use alert(result)
*/