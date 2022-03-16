import GuitarSpec from "./GuitarSpec";

export default class Guitar {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: GuitarSpec,
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
