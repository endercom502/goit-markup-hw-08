(() => {
    const refs = {
      openModalBtn: document.querySelector(".start-menu"),
    closeModalBtn: document.querySelector(".mobile-menu__body"),
    backdrop: document.querySelector(".end-menu"),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();