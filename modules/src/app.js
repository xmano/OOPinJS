class Machine {
    
}

class Drill extends Machine {
    
}

class Cutter extends Machine {
    constructor(id, price) {
      super();
      this.id = id;
      this.price = price;
    }
}

Cutter.maxWeight = 100;

let c = new Cutter();

console.log(c instanceof Object);
console.log("Module loaded");