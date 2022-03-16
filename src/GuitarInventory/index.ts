import GuitarSpec from "./classes/GuitarSpec";
import Inventory from "./classes/Inventory";
import { Builder, Type, Wood } from "./classes/model";

const inventory = new Inventory();
inventory.initializeInventory();
const targetGuitar = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER);
console.log(inventory.search(targetGuitar));
