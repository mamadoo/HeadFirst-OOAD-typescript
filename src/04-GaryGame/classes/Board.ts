import Tile from "./Tile";
import Unit from "./Unit";

export default class Board {
  private tiles: Tile[][];

  constructor(
    private width: number,
    private height: number,
  ) {
    this.initialize();
  }

  private initialize(): void {
    this.tiles = new Array(this.width);
    for (let i = 0; i < this.width; i++) {
      this.tiles.push(new Array(this.height));
      for (let j = 0; j < this.height; j++) {
        this.tiles[i][j] = new Tile();
      }
    }
  }

  public getTile(x: number, y: number): Tile {
    return this.tiles[x - 1][y - 1];
  }

  public addUnit(unit: Unit, x: number, y: number): void {
    const tile = this.getTile(x, y);
    tile.addUnit(unit);
  }

  public removeUnit(unit: Unit, x: number, y: number): void {
    const tile = this.getTile(x, y);
    tile.removeUnit(unit);
  }

  // public removeUnits(x: number, y: number): void {
  //   const tile = this.getTile(x, y);
  //   tile.removeUnits();
  // }

  // public getUnits(x: number, y: number): Unit[] {
  //   const tile = this.getTile(x, y);
  //   tile.getUnits();
  // }
}
