const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid height.";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}.`;
    if (bmi < 18.5) {
      result.innerHTML += "You are underweight.";
    }
    if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML += "You are normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
      result.innerHTML += "You are overweight.";
    }
  }
});
