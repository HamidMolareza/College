const modal = document.getElementById("modal");

const btns = document.querySelectorAll(".info-btn");

const close = document.getElementById("close");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    document
      .getElementById("modal")
      .querySelector(".username").textContent = this.closest(
      "tr"
    ).children[1].textContent;
    modal.style.display = "flex";
  })
);

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", () => {
  if (event.target == modal) {
    document.getElementById("modal").querySelector(".username").textContent =
      "";
    modal.style.display = "none";
  }
});
