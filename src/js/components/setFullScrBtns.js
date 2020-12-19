import hideItherMainElems from "../utility/hideOtherMainElems";

export default function () {
  const main = document.querySelector("main");
  const mainElements = Array.from(main.children);

  mainElements.map((e) => {
    const fullScreenButton = document.createElement("div");
    fullScreenButton.classList.add("fullscreen-btn");
    fullScreenButton.addEventListener("click", () => {
      fullScreenButton.classList.toggle("fullscreen-btn--on");
      fullScreenButton.parentElement.classList.toggle("full-screen-mode");
      const currentTable = fullScreenButton.parentElement.children[2];
      currentTable.classList.toggle("stats__table--full-screen");
      hideItherMainElems(fullScreenButton.parentElement);
    });
    e.prepend(fullScreenButton);
    return null;
  });
}
