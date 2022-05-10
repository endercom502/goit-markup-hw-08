(() => {
  const refs = {
    openModalBtn: document.querySelector('.start-menu'),
    closeModalBtn: document.querySelector('.end-menu'),
    modal: document.querySelector('.mobile-menus'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();