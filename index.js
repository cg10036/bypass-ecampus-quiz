const _removeEventHandler = (element, event) => {
  try {
    if (element[`on${event}`]) {
      element[`on${event}`] = null;
    }
    element.removeEventListener(
      event,
      getEventListeners(element)[event][0].listener
    );
  } catch {}
};

const removeEventHandler = (element, event) => {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if (Array.isArray(event)) {
    return event.forEach((e) => {
      _removeEventHandler(element, e);
    });
  }
  _removeEventHandler(element, event);
};

removeEventHandler(document, ["contextmenu", "keydown"]);
removeEventHandler("#page-mod-quiz-attempt", [
  "cut",
  "copy",
  "paste",
  "keydown",
]);
