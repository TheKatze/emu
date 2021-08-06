import { uint16, uint8 } from "../../types.ts";
import { Processor } from "./processorType.ts";

export default function ConditionalProcessor<TProcessor extends Processor>(
  Base: TProcessor
) {
  return class ConditionalProcessor extends Base {
    public jmp(address: uint16): void {
      this.setIp(address);
    }

    public jif(address: uint16): void {
      if (this.registers.FLAGS) {
        this.setIp(address);
      }
    }

    public jeq(address: uint16): void {
      if (this.registers.A === this.registers.B) {
        this.setIp(address);
      }
    }

    public jne(address: uint16): void {
      if (this.registers.A !== this.registers.B) {
        this.setIp(address);
      }
    }

    public jgt(address: uint16): void {
      if (this.registers.A > this.registers.B) {
        this.setIp(address);
      }
    }

    public jlt(address: uint16): void {
      if (this.registers.A < this.registers.B) {
        this.setIp(address);
      }
    }

    private setIp(address: uint16): void {
      this.registers.IPH = ((address & 0xff00) >> 8) as uint8;
      this.registers.IPL = (address & 0x00ff) as uint8;
    }
  };
}
