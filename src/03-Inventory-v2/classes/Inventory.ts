import Instrument from "./Instrument";
import InstrumentSpec from "./InstrumentSpec";
import { Builder, InstrumentType, Style, Type, Wood } from "./model";

export default class Inventory {
  private instruments: Instrument[] = [];

  public addInstrument(
    serialNumber: string,
    price: number,
    spec: InstrumentSpec,
  ) {
    const instrument = new Instrument(
      serialNumber,
      price,
      spec,
    );


    this.instruments.push(instrument);
  }

  public getInstrument(serialNumber: string) {
    for (const instrument of this.instruments) {
      if (instrument.getSerialNumber() === serialNumber) {
        return instrument;
      }
    }

    return null;
  }

  public search(searchSpec: InstrumentSpec): Instrument[] {
    const matchedInstruments = [];
    for (const instrument of this.instruments) {
      if (instrument.getSpec().matches(searchSpec)) {
        matchedInstruments.push(instrument);
      }
    }

    return matchedInstruments;
  }

  public initializeInventory() {
    const i1 = new Map();
    i1.set("instrumentType", InstrumentType.Guitar);
    i1.set("builder", Builder.FENDER);
    i1.set("model", "Stratocastor");
    i1.set("type", Type.ELECTRIC);
    i1.set("numStrings", 12);
    i1.set("backWood", Wood.ALDER);
    i1.set("topWood", Wood.CEDAR);
    this.addInstrument("V12345", 0, new InstrumentSpec(i1));

    const i2 = new Map();
    i2.set("instrumentType", InstrumentType.Guitar);
    i2.set("builder", Builder.COLLINGS);
    i2.set("model", "OakTown Goove");
    i2.set("type", Type.ACOUSTIC);
    i2.set("numStrings", 6);
    i2.set("backWood", Wood.SITKA);
    i2.set("topWood", Wood.SITKA);
    this.addInstrument("A21457", 0, new InstrumentSpec(i2));

    const i3 = new Map();
    i3.set("instrumentType", InstrumentType.Guitar);
    i3.set("builder", Builder.FENDER);
    i3.set("model", "Stratocastor");
    i3.set("type", Type.ELECTRIC);
    i3.set("numStrings", 6);
    i3.set("backWood", Wood.ALDER);
    i3.set("topWood", Wood.ALDER);
    this.addInstrument("V95693", 1499.95, new InstrumentSpec(i3));

    const i4 = new Map();
    i4.set("instrumentType", InstrumentType.Guitar);
    i4.set("builder", Builder.MARTIN);
    i4.set("model", "Stratocastor Light");
    i4.set("type", Type.ELECTRIC);
    i4.set("numStrings", 12);
    i4.set("backWood", Wood.COCOBOLO);
    i4.set("topWood", Wood.MAPLE);
    this.addInstrument("X54321", 0, new InstrumentSpec(i4));

    const i5 = new Map();
    i5.set("instrumentType", InstrumentType.Guitar);
    i5.set("builder", Builder.MARTIN);
    i5.set("model", "Stratocastor FeatherWeight");
    i5.set("type", Type.ELECTRIC);
    i5.set("numStrings", 6);
    i5.set("backWood", Wood.COCOBOLO);
    i5.set("topWood", Wood.ALDER);
    this.addInstrument("X99876", 0, new InstrumentSpec(i5));

    const i6 = new Map();
    i6.set("instrumentType", InstrumentType.Mandolin);
    i6.set("builder", Builder.MARTIN);
    i6.set("model", "Stratocastor FeatherWeight");
    i6.set("type", Type.ELECTRIC);
    i6.set("style", Style.A);
    i6.set("backWood", Wood.COCOBOLO);
    i6.set("topWood", Wood.ALDER);
    this.addInstrument("bv9812", 0, new InstrumentSpec(i6));
  }
}
