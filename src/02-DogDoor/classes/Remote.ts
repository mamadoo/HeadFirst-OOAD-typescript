import DogDoor from "./DogDoor";

export default class Remote {
  constructor(private door: DogDoor) {}

  public pressButton() {
    console.log("Pressing the remote control button...");
    if (this.door.isOpen()) {
      this.door.close();
    } else {
      this.door.open();
    }
  }
}
