export class Position {
  x: i32 = 0;
  y: i32 = 0;
  toString(): string {
    return this.x.toString() + "/" + this.y.toString();
  }
}
