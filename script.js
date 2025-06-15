function volume_sphere() {
  // Get radius value from the input field
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  // Get the output field
  const volumeField = document.getElementById("volume");

  // Validate the input: must be a number and non-negative
  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
    return false; // Prevent form submission
  }

  // Calculate the volume of the sphere: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the result, rounded to 4 decimal places
  volumeField.value = volume.toFixed(4);

  return false; // Prevent form submission
}

// Attach the function to the form's onsubmit event after the page loads
window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
