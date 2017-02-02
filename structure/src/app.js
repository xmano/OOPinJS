import {Cutter} from './class/cutter.js';
import {MachineService} from './service/machineservice.js';

let c = new Cutter("M123", 5000);
let ms = new MachineService();

console.log("Cutter id: " + c.id + " price: " + c.price);
console.log(ms.initData());
