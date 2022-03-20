import Bark from "./classes/Bark";
import BarkRecognizer from "./classes/BarkRecognizer";
import DogDoor from "./classes/DogDoor";
import Remote from "./classes/Remote";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const demo = async () => {
  const door = new DogDoor();
  const bark1 = new Bark("Rowlf");
  const bark2 = new Bark("Woof");
  const remote = new Remote(door);
  const barkRecognizer = new BarkRecognizer(door);
  door.addAllowedBarks(bark2);
  console.log("start barking");
  // remote.pressButton();
  barkRecognizer.recognize(bark2);
  console.log("has gone outside");
  console.log("all done");
  await sleep(10000);
  console.log("but he is stuck outside");
  console.log("start barking...");
  // console.log("grap the remote control");
  // remote.pressButton();
  barkRecognizer.recognize(bark2);
  console.log("back inside");
};

demo();
