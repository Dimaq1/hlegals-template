export function toggleActiveClassWithInterval(selector, delay) {
  const elements = document.querySelectorAll(selector);
  let index = 1;

  elements[0].classList.add('-active');

  setInterval(() => {
    const currentElement = elements[index];
    const isActive = currentElement.classList.contains('-active');

    if (isActive) {
      currentElement.classList.remove('-active');
    } else {
      elements.forEach(element => element.classList.remove('-active'));
      currentElement.classList.add('-active');
    }

    index = (index + 1) % elements.length;
  }, delay);
}