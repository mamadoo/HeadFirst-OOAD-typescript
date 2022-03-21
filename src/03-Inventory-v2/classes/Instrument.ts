import InstrumentSpec from "./InstrumentSpec";

export default class Instrument {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: InstrumentSpec,
  ) {}

  public getSerialNumber() {
    return this.serialNumber;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(newPrice: number) {
    this.price = newPrice;
  }

  public getSpec() {
    return this.spec;
  }
}
