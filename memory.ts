import { uint8 } from "./types.ts";

export default class Memory {
  private memory: uint8[] = new Array(256 * 256);

  public load(high: uint8, low: uint8): uint8 {
    return this.memory[high * low];
  }

  public save(high: uint8, low: uint8, value: uint8): void {
    this.memory[high * low] = value;
  }
}
