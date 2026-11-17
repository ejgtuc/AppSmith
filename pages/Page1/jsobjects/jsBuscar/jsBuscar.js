export default {
  timer: null,

  esperar() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      qryParamListado.run();
    }, 400);
  }
}
