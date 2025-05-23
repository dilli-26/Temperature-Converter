const tempInput = document.getElementById('tempInput');
const conversionRadios = document.getElementsByName('conversionType');
const resultDisplay = document.getElementById('result');

tempInput.addEventListener('input', updateConversion);
conversionRadios.forEach(radio => radio.addEventListener('change', updateConversion));

function updateConversion() {
  const temp = parseFloat(tempInput.value);
  const conversionType = document.querySelector('input[name="conversionType"]:checked').value;

  if (isNaN(temp)) {
    resultDisplay.textContent = '';
    return;
  }

  let result;
  if (conversionType === 'CtoF') {
    result = (temp * 9/5) + 32;
    resultDisplay.textContent = `${temp} °C = ${result.toFixed(2)} °F`;
  } else {
    result = (temp - 32) * 5/9;
    resultDisplay.textContent = `${temp} °F = ${result.toFixed(2)} °C`;
  }
}
