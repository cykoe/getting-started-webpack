function component() {
  const div = document.createElement("div");

  div.innerHTML = "Hello world!";

  return div;
}

document.body.appendChild(component());
