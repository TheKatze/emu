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

  public shouldHalt = false;

  protected incrementInstructionPointer(lastParamCount: 0 | 1 | 2) {
    const increment = lastParamCount + 1;

    const increments = this.splitInt(this.registers.IPL + increment);

    this.registers.IPL = increments.low;
    this.registers.IPH += increments.high;
  }

  protected splitInt(value: number): { high: uint8; low: uint8 } {
    const high = ((value & 0xff00) >> 8) as uint8;
    const low = (value & 0x00ff) as uint8;
    return { high, low };
  }

  public abstract run(): void;
}

export default ProcessorBase;
