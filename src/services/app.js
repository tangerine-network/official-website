
class App {
  openModal;
  closeModal;

  setOpenModal = fn => this.openModal = fn;
  setCloseModal = fn => this.closeModal = fn;
}

const t = new App();

export default t;
