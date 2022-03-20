import Bark from "./Bark";
import DogDoor from "./DogDoor";

export default class BarkRecognizer {
  constructor(private door: DogDoor) {}

  public recognize(bark: Bark) {
    console.log("Bark recognizer head a bark: " + bark.getSound());
    const allowedBarks = this.door.getAllowedBarks();
    for (const allowedBark of allowedBarks) {
      if (allowedBark.equals(bark)) {
        this.door.open();
        return;
      }
    }

    console.error("This dog is not allowed.");
  }
}
