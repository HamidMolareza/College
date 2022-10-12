[].forEach.call(document.querySelectorAll("nav > ul > li"), function (link) {
  link.addEventListener("mouseover", onEnter);
  link.addEventListener("mouseout", onLeave);
});

function onEnter() {
  this.classList.add("hover");
}

function onLeave() {
  this.classList.remove("hover");
}
