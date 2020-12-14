// I will delete this. Added to show how modules works
export default function demo() {
  const div = document.createElement("div");
  div.style =
    "width: 300px; height: 300px; background: url(../../assets/img/favicon.svg);";
  div.innerText = "This div displayed by demo.js module";
  document.body.append(div);
}
