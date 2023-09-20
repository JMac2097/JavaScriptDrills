const debounceBtn = document.querySelector(".js-debounce");
const debounceFeedback = document.querySelector(".debounce-feedback");
const debounceTestMsg = "Hello from debounce!";

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
