const debounceBtn = document.querySelector(".js-debounce");
const debounceFeedback = document.querySelector(".debounce-feedback");
const debounceTestMsg = "Hello from debounce!";
const throttleFeedback = document.querySelector(".throttle-feedback");
const throttleTestMsg = "Hello from throttle!";

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

const updateContent = (container, message) => {
  container.innerHTML += `${message}<br>`;
};

debounceBtn.addEventListener(
  "click",
  debounce(() => updateContent(debounceFeedback, debounceTestMsg), 1000)
);

const throttleBtn = document.querySelector(".js-throttle");

const throttle = (func, delay) => {
  let lastCall = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay - (now - lastCall));
    }
  };
};

throttleBtn.addEventListener(
  "click",
  throttle(() => updateContent(throttleFeedback, throttleTestMsg), 1000)
);
