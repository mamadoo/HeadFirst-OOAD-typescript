import Unit from "./Unit";

export default class Tile {
  private units: Unit[] = [];

  public addUnit(unit: Unit): void {
    this.units.push(unit);
  }

  public removeUnit(unit: Unit): void {
    this.units.splice(this.units.indexOf(unit), 1);
  }
}
