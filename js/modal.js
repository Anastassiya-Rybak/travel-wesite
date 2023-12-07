const btns = document.querySelectorAll("*[data-modal-open]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let name = btns[i].getAttribute('data-modal-open');
    let modal = document.querySelector("[data-modal='" + name + "']");
    if (name === 'burgernav') {
      modal.classList.toggle('open');
      return
    } 
    modal.style.display = "flex";
    let close = modal.querySelector(".btn-close-modal-window");
    if (close) close.addEventListener('click', function () { modal.style.display = "none"; });
  });
}

