//...funcao modal show
function showHideModalFn() {
    //...pega elementos que abrem e fecham os modais
    const forOpen = document.getElementsByClassName("open_modal");
    const forClose = document.getElementsByClassName("close_modal");

    //...lacos para adicionar o evento de clique nos botoes de exibir e fechar os modais
    for (let i = 0; i < forOpen.length; i++) {
        forOpen[i].addEventListener("click", showModal);
        forClose[i].addEventListener("click", closeModal);
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
    function closeModal(e) {
        const thisEl = e.currentTarget;
        const modalParent = thisEl.parentNode.parentNode;

        modalParent.classList.toggle("hidden");
    }
}