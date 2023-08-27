export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),
  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
};
modal.btnClose.onclick = () => {
  modal.close();
};

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}
