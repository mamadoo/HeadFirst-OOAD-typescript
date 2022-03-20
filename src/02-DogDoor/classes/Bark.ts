export default class Bark {
  constructor(private sound: string) {}

  public getSound() {
    return this.sound;
  }

  public equals(otherBark: Bark) {
    if (otherBark instanceof Bark) {
      if (this.sound.toLowerCase() === otherBark.getSound().toLowerCase()) {
        return true;
      }
    }

    return false;
  }
}
