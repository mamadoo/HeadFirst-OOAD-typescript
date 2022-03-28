import Weapon from "./Weapon";

export default class Unit {
  private type: string;
  private id: number;
  private name: string;
  private weapons: Weapon[] = [];
  private properties: Map<string, any>;

  public setType(type: string) {
    this.type = type;
  }

  public getType() {
    return this.type;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public addWeapon(weapon: Weapon) {
    this.weapons.push(weapon);
  }

  public getWeapons() {
    return this.weapons;
  }

  public setProperty(property: string, value: Object) {
    if (!this.properties) {
      this.properties = new Map<string, any>();
    }
    this.properties.set(property, value);
  }

  public getProperty(property: string) {
    if (!this.properties) {
      throw new Error("No properties for this unit.");
    }
    const value = this.properties.get(property);
    if (!value) {
      throw new Error("Request for non-existent property.");
    } else {
      return value;
    }
  }
}
