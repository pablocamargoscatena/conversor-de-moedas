const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertvalues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value);


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.7

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue / euroToday)
        }


    if (currencySelect.value =="libra"){
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        } ) .format(convertedValue / libraToday )


    }   
    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency(){
    currencyImg = document.querySelector (".currency-img")


    const currencyName = document.getElementById("currency-name")
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar amrericano"
        currencyImg.src = './assets/dolar.png'

    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = './assets/euro.png' 
    }

     if (currencySelect.value == "libra"){
            currencyName.innerHTML = "libra"
            currencyImg.src = "./assets/libra.png"
     }
    convertvalues()

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)

