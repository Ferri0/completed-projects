export default (function () {
  let currentMode = "visible";

  return function (notHiddenElem) {
    console.log(notHiddenElem)
    const main = document.querySelector("main");
    const mainElements = Array.from(main.children);
    const timeout = currentMode === "visible" ? 0 : 300;
    currentMode = timeout === 0 ? "hidden" : "visible";
    mainElements.map((e) => {
      if (e !== notHiddenElem) {
        setTimeout(() => {
          e.classList.toggle("hiden-mode");
        }, timeout);
      }
      return null;
    });
  }
})();
