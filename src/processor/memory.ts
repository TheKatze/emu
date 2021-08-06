import { uint8 } from "../types.ts";

export default class Memory {
  constructor(memory: uint8[]) {
    this.memory = memory;
  }

  public memory: uint8[];

  public load(high: uint8, low: uint8): uint8 {
    return this.memory[high * 256 + low];
  }

  public save(high: uint8, low: uint8, value: uint8): void {
    this.memory[high * 256 + low] = value;
  }
}
