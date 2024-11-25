document.getElementById('convert-btn').addEventListener('click', function () {
    const temp = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

  
    if (isNaN(temp)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

  
    let convertedTemp;

    if (inputUnit === outputUnit) {
        convertedTemp = temp; // Same unit, no conversion needed
    } else if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
        convertedTemp = (temp * 9/5) + 32;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Kelvin') {
        convertedTemp = temp + 273.15;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
        convertedTemp = (temp - 32) * 5/9;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Kelvin') {
        convertedTemp = (temp - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Celsius') {
        convertedTemp = temp - 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Fahrenheit') {
        convertedTemp = (temp - 273.15) * 9/5 + 32;
    }


    document.getElementById('result').classList.remove('hidden');
    document.getElementById('converted-temp').textContent = `${convertedTemp.toFixed(2)} °${outputUnit}`;
});
