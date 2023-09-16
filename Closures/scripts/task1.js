console.log("task1.js loaded");

// Wrap in an IIFE
(function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  function closeAllAccordionItems() {
    accordionItems.forEach((item) => {
      const content = item.querySelector(".accordion-content");
      content.classList.remove("active");
    });
  }

  function toggleAccordion(item) {
    closeAllAccordionItems();
    const content = item.querySelector(".accordion-content");
    // TODO: toggle the active class on the accordion content
    if (content.classList.contains("active")) {
      console.log(content.classList);
      content.classList.remove("active");
    } else {
      closeAllAccordionItems();
      content.classList.add("active");
    }
  }

  // intialize accordion state
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => toggleAccordion(item));
  });
})();
