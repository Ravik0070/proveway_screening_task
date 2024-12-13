// Get all radio buttons and their associated select containers
const radioButtons = document.querySelectorAll(
  '.radio-container input[type="radio"]'
);

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    // Hide all select containers
    const selectContainers = document.querySelectorAll(".select-container");
    selectContainers.forEach((container) => {
      container.style.display = "none";
    });

    // Show the select container for the selected radio button
    const selectedRadioContainer =
      this.closest(".radio-container").querySelector(".select-container");
    if (selectedRadioContainer) {
      selectedRadioContainer.style.display = "flex";
    }
  });
});
