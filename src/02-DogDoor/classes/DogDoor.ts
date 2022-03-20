import Bark from "./Bark";

export default class DogDoor {
  private _open = false;
  private allowedBarks: Bark[] = [];

  public open() {
    console.log("The dog door opens.");
    this._open = true;

    setTimeout(() => {
      this.close();
    }, 5000);
  }

  public close() {
    console.log("The dog door closes.");
    this._open = false;
  }

  public isOpen() {
    return this._open;
  }

  public addAllowedBarks(bark: Bark) {
    this.allowedBarks.push(bark);
  }

  public getAllowedBarks() {
    return this.allowedBarks;
  }
}
