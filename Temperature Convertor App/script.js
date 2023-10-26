const inputTemp = document.getElementById('inputTemp');
const inputUnit = document.getElementById('inputUnit');
const convertUnit = document.getElementById('convertUnit');
const convertedTemp = document.getElementById('convertedTemp');
const convertBtn = document.getElementById('convertBtn');

// Create an object to store temperature unit conversions
const unitConversions = {
  '°C': {
    '°F': (temp) => (temp * 9/5) + 32,
    'K': (temp) => temp + 273.15,
  },
  '°F': {
    '°C': (temp) => (temp - 32) * 5/9,
    'K': (temp) => (temp + 459.67) * 5/9,
  },
  'K': {
    '°C': (temp) => temp - 273.15,
    '°F': (temp) => (temp * 9/5) - 459.67,
  },
};

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(inputTemp.value);
  const fromUnit = inputUnit.value;
  const toUnit = convertUnit.value;

  if (!isNaN(temperature)) {
    if (unitConversions[fromUnit] && unitConversions[fromUnit][toUnit]) {
      const convertedTemperature = unitConversions[fromUnit][toUnit](temperature);
      convertedTemp.textContent = convertedTemperature.toFixed(2) + ' ' + toUnit;
    } else {
      convertedTemp.textContent = 'Invalid conversion';
    }
  } else {
    convertedTemp.textContent = 'Invalid input';
  }
});
