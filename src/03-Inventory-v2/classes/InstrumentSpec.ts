export default class InstrumentSpec {
  constructor(
    private properties: Map<string, any>,
  ) {}

  public getProperty(propertyName: string) {
    return this.properties.get(propertyName);
  }

  public getProperties() {
    return this.properties;
  }

  public matches(otherSpec: InstrumentSpec) {
    const keys = otherSpec.getProperties().keys();
    for (const key of keys) {
      if (this.getProperty(key) !== otherSpec.getProperty(key)) {
        return false;
      }
    }

    return true;
  }
}
