import {Machine} from './machine.js';

export class Cutter extends Machine {
    constructor(id, price) {
      super();
      this.id = id;
      this.price = price;
    }
}


