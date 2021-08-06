import Memory from "./memory.ts";
import { Register, uint8 } from "../types.ts";

abstract class ProcessorBase {
  constructor(memory: uint8[]) {
    this.memory = new Memory(memory);
  }

  public memory: Memory;

  public registers: { [id in Register]: uint8 } = {
    A: 0b0000_0000,
    B: 0b0000_0000,
    R: 0b0000_0000,
    IPH: 0b0000_0000,
    IPL: 0b0000_0000,
    FLAGS: 0b0000_0000,
  };

  public abstract run(): void;
}

export default ProcessorBase;
