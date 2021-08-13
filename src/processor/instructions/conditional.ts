import { Flags, uint8 } from "../../types.ts";
import { Processor } from "./processorType.ts";

export default function ConditionalProcessor<TProcessor extends Processor>(
  Base: TProcessor,
) {
  return class ConditionalProcessor extends Base {
    public jmp(high: uint8, low: uint8): void {
      this.setIp(high, low);
    }

    public jif(high: uint8, low: uint8): void {
      if (this.registers.FLAGS) {
        this.setIp(high, low);
      }
    }

    public jeq(high: uint8, low: uint8): void {
      if (this.registers.A === this.registers.B) {
        this.setIp(high, low);
      }
    }

    public jne(high: uint8, low: uint8): void {
      if (this.registers.A !== this.registers.B) {
        this.setIp(high, low);
      }
    }

    public jgt(high: uint8, low: uint8): void {
      if (this.registers.A > this.registers.B) {
        this.setIp(high, low);
      }
    }

    public jlt(high: uint8, low: uint8): void {
      if (this.registers.A < this.registers.B) {
        this.setIp(high, low);
      }
    }

    private setIp(high: uint8, low: uint8): void {
      this.registers.IPH = high;
      this.registers.IPL = low;

      this.registers.FLAGS = (this.registers.FLAGS | Flags.HasJumped) as uint8;
    }
  };
}
