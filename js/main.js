let display = document.getElementById("calculator");

const wipe = () => {
  display.value = "";
};

const show = (n) => {
  display.value += n;
};

const calc = () => {
  display.value = eval(display.value);
};
