import { Builder, Type, Wood } from "./model";

export default class GuitarSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private numStrings: number,
    private backWood: Wood,
    private topWood: Wood,
  ) {}

  public getBuilder() {
    return this.builder;
  }

  public getModel() {
    return this.model;
  }

  public getType() {
    return this.type;
  }

  public getNumStrings() {
    return this.numStrings;
  }

  public getBackWood() {
    return this.backWood;
  }

  public getTopWood() {
    return this.topWood;
  }

  public matches(otherSpec: GuitarSpec) {
    if (
      this.getBuilder() === otherSpec.getBuilder() &&
      this.getModel().toLowerCase() === otherSpec.getModel().toLowerCase() &&
      this.getType() === otherSpec.getType() &&
      this.getNumStrings() === otherSpec.getNumStrings() &&
      this.getBackWood() === otherSpec.getBackWood() &&
      this.getTopWood() === otherSpec.getTopWood()
    ) {
      return true;
    }

    return false;
  }
}
