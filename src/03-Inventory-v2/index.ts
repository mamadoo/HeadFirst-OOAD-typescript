import InstrumentSpec from "./classes/InstrumentSpec";
import Inventory from "./classes/Inventory";
import { Builder, InstrumentType, Style, Type, Wood } from "./classes/model";

const inventory = new Inventory();
inventory.initializeInventory();
const searchMap = new Map();
searchMap.set("builder", Builder.MARTIN);
const targetInstrument = new InstrumentSpec(searchMap);
console.log(inventory.search(targetInstrument));
