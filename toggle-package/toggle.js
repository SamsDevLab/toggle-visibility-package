export function toggleVisibility(element) {
  const computedStyle = window.getComputedStyle(element);
  const visibilityStatus = computedStyle.visibility;

  if (visibilityStatus === "hidden") {
    element.style.visibility = "visible";
  } else if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  }
}

export function printMessage() {
  console.log("This is a message from the demo package!");
}
