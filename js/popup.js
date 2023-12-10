const anchors = document.querySelectorAll("*[data-anchor]");

anchors.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let name = el.getAttribute('data-anchor');
        let content = document.querySelector("[data-anchor-content='" + name + "']");
        content.classList.toggle('open');
    });
})

