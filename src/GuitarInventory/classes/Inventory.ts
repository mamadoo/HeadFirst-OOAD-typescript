import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";
import { Builder, Type, Wood } from "./model";

export default class Inventory {
  private guitars: Guitar[] = [];

  public addGuitar(
    serialNumber: string,
    price: number,
    spec: GuitarSpec,
  ) {
    const guitar = new Guitar(
      serialNumber,
      price,
      spec,
    );

    this.guitars.push(guitar);
  }

  public getGuitar(serialNumber: string) {
    for (const guitar of this.guitars) {
      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }

    return null;
  }

  public search(searchSpec: GuitarSpec): Guitar[] {
    const matchedGuitars = [];
    for (const guitar of this.guitars) {
      if (guitar.getSpec().matches(searchSpec)) {
        matchedGuitars.push(guitar);
      }
    }

    return matchedGuitars;
  }

  public initializeInventory() {
    this.addGuitar("V12345", 0, new GuitarSpec(
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      12,
      Wood.ALDER,
      Wood.CEDAR,
    )),
    this.addGuitar("A21457", 0, new GuitarSpec(Builder.COLLINGS, "OakTown Goove", Type.ACOUSTIC, 6, Wood.SITKA, Wood.SITKA));
    this.addGuitar("V95693", 1499.95, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
    this.addGuitar("V95452", 960.5, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
    this.addGuitar("X54321", 0, new GuitarSpec(Builder.MARTIN, "Stratocastor Light", Type.ELECTRIC, 12, Wood.COCOBOLO, Wood.MAPLE));
    this.addGuitar("X99876", 0, new GuitarSpec(Builder.MARTIN, "Stratocastor FeatherWeight", Type.ELECTRIC, 6, Wood.COCOBOLO, Wood.ALDER));
  }
}
