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

let fromCurrency = prompt("Convert from currency? e.g. USD, EUR, KRW, IDR, VND")
let toCurrency = prompt("Convert to currency? e.g. USD, EUR, KRW, IDR, VND")

let amountConvert = prompt("How much?");

let amountResult = amountConvert * currencyTypes[fromCurrency][toCurrency];

console.log(amountResult.toFixed(2))

// function formatCurrency(type, value) {
//     const formatter = new Intl.NumberFormat(type, {
//         currency: type,
//         style: "currency"
//     });
//     return formatter.format(value);
// }