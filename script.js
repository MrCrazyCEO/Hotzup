function toggleUnit() {
  const toggle = document.getElementById("toggle");
  const weatherValue = document.querySelector(".weather-value");

  if (toggle.checked) {
    // toggle is checked, display temperature in Fahrenheit
    let fahrenheit = Math.round(parseInt(weatherValue.textContent) * 9 / 5 + 32);
    weatherValue.textContent = `${fahrenheit}\xB0F`;
  } else {
    // toggle is not checked, display temperature in Celsius
    weatherValue.textContent = "25\xB0C";
  }
}

