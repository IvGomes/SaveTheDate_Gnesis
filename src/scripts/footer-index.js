//...funcao modal show
const forOpen = document.getElementsByClassName("open_modal");

for (let i = 0; i < forOpen.length; i++) {
    forOpen[i].addEventListener("click", showModal);
}

function showModal(e) {
    const thisEl = e.currentTarget;
    const howIs = thisEl.getAttribute("data-modal");

    if(howIs == 'casas_freitas') {
        const modalParent = thisEl.parentNode;
        modalParent.querySelector(".modal").classList.toggle("hidden");
    }
    if(howIs == 'pix') {
        const modalParent = thisEl.parentNode.parentNode.parentNode;
        modalParent.querySelector(".modal").classList.toggle("hidden");
    }
}

//...funcao modal close
const forClose = document.getElementsByClassName("close_modal");

for (let i = 0; i < forClose.length; i++) {
    forClose[i].addEventListener("click", closeModal);
}

function closeModal(e) {
    const thisEl = e.currentTarget;
    const modalParent = thisEl.parentNode.parentNode;

    modalParent.classList.toggle("hidden");
}