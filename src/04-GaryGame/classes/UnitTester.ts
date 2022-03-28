import Unit from "./Unit";

export default class UnitTester {
  public testType(unit: Unit, type: string, expectedOutputType: string) {
    console.log("Testing setting/getting the type property");
    unit.setType(type);
    const outputType = unit.getType();
    if (expectedOutputType === outputType) {
      console.log("Test passed");
    } else {
      console.log(`Test failed: ${outputType} didn't match ${expectedOutputType}`);
    }
  }

  public testUnitSpecificProperty(unit: Unit, propertyName: string, inputValue: Object, expectedOutputValue: Object) {
    console.log("Testing setting/getting a specific property");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
      console.log("Test passed");
    } else {
      console.log(`Test failed: ${outputValue} didn't match ${expectedOutputValue}`);
    }
  }

  public testChangeProperty(unit: Unit, propertyName: string, inputValue: Object, expectedOutputValue: Object) {
    console.log("Testing changing an existing property's value");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
      console.log("Test passed");
    } else {
      console.log(`Test failed: ${outputValue} didn't match ${expectedOutputValue}`);
    }
  }

  public testNonExistentProperty(unit: Unit, propertyName: string) {
    console.log("Testing getting a non-existent property's value.");
    try {
      unit.getProperty(propertyName);
    } catch (e) {
      console.log("Test passed");
      return;
    }

    console.log("Test failed");
  }

  public static run() {
    const tester = new UnitTester();
    const unit = new Unit();
    tester.testType(unit, "infantry", "infantry");
    tester.testUnitSpecificProperty(unit, "hitPoints", 25, 25);
    tester.testChangeProperty(unit, "hitPoints", 15, 15);
    tester.testNonExistentProperty(unit, "strength");
  }
}
