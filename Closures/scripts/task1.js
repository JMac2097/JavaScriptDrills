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
    const content = item.querySelector(".accordion-content");
    // TODO: toggle the active class on the accordion content
    const isActive = content.classList.contains("active");

    if (!isActive) {
      closeAllAccordionItems();
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  }

  // intialize accordion state
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => toggleAccordion(item));
  });
})();

///Yes, this code is using closures to handle an accordion menu state. A closure is a function that has access to variables from its containing (enclosing) function's scope, even after the outer function has finished executing. In this code, an immediately invoked function expression (IIFE) is used to create a closure that encapsulates the accordion functionality.

// Here's how closures are used in this code:

// The IIFE (Immediately Invoked Function Expression) is defined, creating a scope for the entire accordion functionality. This function is executed immediately when the script is loaded.

// Inside the IIFE, a constant accordionItems is declared and initialized with a collection of DOM elements matching the class ".accordion-item". This collection represents the individual items in the accordion menu.

// Two inner functions, closeAllAccordionItems and toggleAccordion, are defined within the scope of the IIFE. These functions have access to the accordionItems variable because they are declared within the same scope.

// closeAllAccordionItems iterates over all accordion items and removes the "active" class from their content elements. This function is a closure because it references the accordionItems variable from its containing function.

// toggleAccordion toggles the "active" class on the content element of a specific accordion item. It also calls closeAllAccordionItems to close all other accordion items before opening the clicked one. This function is a closure because it references the accordionItems variable and the closeAllAccordionItems function from its containing function.

// Finally, an event listener is added to each accordion header element inside the accordionItems collection. When a header is clicked, it calls the toggleAccordion function, passing the corresponding accordion item as an argument. This event listener is also defined within the same scope as the accordionItems variable, creating closures.

// In summary, closures are used to encapsulate the accordion functionality within the IIFE, allowing the inner functions to access and manipulate variables and functions from the outer scope, such as accordionItems, closeAllAccordionItems, and the event listener for accordion headers. This approach helps in maintaining the state of the accordion menu and ensures that each accordion item can be opened and closed independently.
