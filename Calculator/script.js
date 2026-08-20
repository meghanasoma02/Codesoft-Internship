let display = document.getElementById("display");
function press(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function delValue() {
    display.value = display.value.slice(0, -1);
}
function percentage() {
    if (display.value !== "") {
        display.value = eval(display.value) / 100;
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}