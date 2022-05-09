(() => {
    const refs = {
      openModalBtn: document.querySelector(".start-menu"),
    closeModalBtn: document.querySelector(".content-menu"),
    backdrop: document.querySelector(".end-menu"),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();