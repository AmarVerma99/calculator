window.onload = function() {
  let display = document.getElementById("display");

  window.append = function(char) {
    display.value += char;
  };

  window.clearDisplay = function() {
    display.value = "";
  };

  window.deleteLast = function() {
    display.value = display.value.slice(0, -1);
  };

  window.calculate = function() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  };
};
