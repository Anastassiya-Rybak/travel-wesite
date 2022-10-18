let btns = document.querySelectorAll("*[data-modal-open]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let name = btns[i].getAttribute('data-modal-open');
    let modal = document.querySelector("[data-modal='" + name + "']");
    modal.style.display = "flex";
    let close = modal.querySelector(".btn-close-modal-window");
    close.addEventListener('click', function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute('data-modal')) {
    let modals = document.querySelectorAll('*[data-modal]');
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
}


// const modalBtns = document.querySelectorAll('._btn-modal-open');
// const modalWindows = document.querySelectorAll('.modal-window');

// function openModal(elem) {
// 	elem.classList.add('active');
// }

// function closeModal(e) {
// 	if (e.target.classList.contains('btn-close-modal-window') || e.target.closest('.btn-close-modal-window') || e.target.classList.contains('modal-bg')) {
// 		e.target.closest('.modal-window').classList.remove('active');
// 	}
// }

// modalBtns.forEach(btn => {
// 	btn.addEventListener('click', (e) => {
// 		let data = e.target.dataset.modalOpen;

// 		modalWindows.forEach(modal => {
// 			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._btn-modal-open').dataset.modalOpen) {
// 				openModal(modal)
// 			}
// 		})
// 	})
// })

// modalWindows.forEach(modal => {
// 	modal.addEventListener('click', e => closeModal(e))
// })

// window.addEventListener('keydown', e => {
// 	modalWindows.forEach(modal => {
// 		if (e.key === "Escape" && modal.classList.contains('active')) {
// 			modal.classList.remove('active');
// 		}
// 	})
// })