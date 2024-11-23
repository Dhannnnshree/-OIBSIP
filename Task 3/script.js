document.getElementById('convertButton').addEventListener('click', function () {
    const tempInput = document.getElementById('tempInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    // Perform conversion
    let convertedTemp = '';
    let targetUnit = '';

    switch (unitInput) {
        case 'celsius':
            convertedTemp = `${(temperature * 9/5 + 32).toFixed(2)} °F (Fahrenheit), ${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
            break;
        case 'fahrenheit':
            convertedTemp = `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
            break;
        case 'kelvin':
            convertedTemp = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
            break;
        default:
            resultDiv.textContent = 'Invalid selection.';
            return;
    }

    // Display result
    resultDiv.textContent = `Converted Temperatures: ${convertedTemp}`;
});
