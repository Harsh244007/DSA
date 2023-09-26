import { makeAutoObservable } from "mobx";

class Home {
  counter = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setCounterNew = (data) => (this.counter = data);
}
export default new Home()