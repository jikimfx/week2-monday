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
    amt ? "" : alert("Please enter amount to convert");
    let from = fromCurrency.value;
    let to = toCurrency.value;
    let result = 0;
    (from == to) ? result = amt : result = (amt * currencyTypes[from][to]).toFixed(2);

    // console.log(result);

    let notification = showResult(to, result)
    document.getElementById("amountResult").innerHTML = `${amt} ${from}=${notification} ${to}`;
})

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

const showResult = (to, result) => {
    let convertedResult = "";
    to === "USD" ? convertedResult = formatCurrency('USD', result) : ""
    to === "EUR" ? convertedResult = formatCurrency('EUR', result) : ""
    to === "VND" ? convertedResult = formatCurrency('VND', result) : ""
    to === "KRW" ? convertedResult = formatCurrency('KRW', result) : ""
    to === "IDR" ? convertedResult = formatCurrency('IDR', result) : ""
    return convertedResult;
}

/*
small tip for this class!
.toLowerCase() .toUpperCase()
it's JS buit in function

tip 2 . if you dont wana open console every time to see the result, use alert(result)
*/