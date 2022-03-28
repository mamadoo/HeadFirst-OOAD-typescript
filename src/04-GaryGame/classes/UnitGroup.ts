import Unit from "./Unit";

export default class UnitGroup {
  private units: Map<number, any>;

  constructor(unitList: Unit[]) {
    this.units = new Map();
    for (const unit of unitList) {
      this.units.set(unit.getId(), unit);
    }
  }

  public addUnit(unit: Unit) {
    this.units.set(unit.getId(), unit);
  }

  public removeUnitById(id: number) {
    this.units.delete(id);
  }

  public removeUnit(unit: Unit) {
    this.removeUnitById(unit.getId());
  }

  public getUnits() {
    return this.units.values();
  }
}
