
function convertMass() {

    // Get the mass entered by the user
    let mass = parseFloat(document.getElementById("mass").value);

    // Get the selected units
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    let result;

    // Check whether the user entered a valid number
    if (isNaN(mass) || mass < 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid mass.";
        return;
    }

    // First convert the mass into kilograms
    let kilograms;

    if (fromUnit === "kg") {
        kilograms = mass;
    }
    else if (fromUnit === "g") {
        kilograms = mass / 1000;
    }
    else if (fromUnit === "lb") {
        kilograms = mass / 2.20462;
    }
    else if (fromUnit === "mg") {
        kilograms = mass / 1000000;
    }

    // Now convert kilograms into the selected unit
    if (toUnit === "kg") {
        result = kilograms;
    }
    else if (toUnit === "g") {
        result = kilograms * 1000;
    }
    else if (toUnit === "lb") {
        result = kilograms * 2.20462;
    }
    else if (toUnit === "mg") {
        result = kilograms * 1000000;
    }

    // Display the final answer on the webpage
    document.getElementById("result").innerHTML =
        mass + " " + fromUnit + " = " + result.toFixed(4) + " " + toUnit;
}
