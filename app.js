const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input => {
    input.addEventListener("input", (e) => {
        // จัวเลขที่ป้อนเข้ามา
        let tempValue = parseInt(e.target.value)
        // ชื่อหน่วยอุณหภูมิ
        let inputName = e.target.name

        if (e.target.value === "") {
            celciusInput.value = null
            fahrenheitInput.value = null
            kelvinInput.value = null
            return
        }

        // กระบวนการแปลงอุณหภูมิ
        if (inputName == "celcius") {
            // Celcius to Fahrenheit
            let fahrenheit = tempValue * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            // Celcius to Kelvin
            let kelvin = tempValue + 273;
            kelvinInput.value = kelvin.toFixed(2)

        } else if (inputName == "fahrenheit") {
            // farenheit to Celcius
            let celcius = (tempValue - 32) / 1.8
            celciusInput.value = celcius.toFixed(2)

            // farenheit to kelvin
            let kelvin = (tempValue - 32) / 1.8 + 273
            kelvinInput.value = kelvin.toFixed(2)

        } else if (inputName == "kelvin") {

            // kelvin to Celcius
            let celcius = tempValue - 273
            celciusInput.value = celcius.toFixed(2)

            //kelvin to fahrenheit
            let fahrenheit = (tempValue - 273) * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})