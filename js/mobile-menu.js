(() => {
    const refs = {
      openModalBtn: document.querySelector("{.mobile-menu}"),
    closeModalBtn: document.querySelector("{.mobile-menu__header--button}"),
    backdrop: document.querySelector("{.mobile-menu__body}"),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();