import { uint8 } from "../../types.ts";
import { Processor } from "./processorType.ts";

export default function BitwiseProcessor<TProcessor extends Processor>(
  Base: TProcessor
) {
  return class BitwiseProcessor extends Base {
    public not(): void {
      const result = ~this.registers.R;
      this.registers.R = (result & 255) as uint8;
    }

    public and(): void {
      const and = this.registers.A & this.registers.B;
      this.registers.R = and as uint8;
    }

    public xor(): void {
      const or = this.registers.A ^ this.registers.B;
      this.registers.R = or as uint8;
    }

    public or(): void {
      const or = this.registers.A | this.registers.B;
      this.registers.R = or as uint8;
    }

    public shl(): void {
      const shl = this.registers.A << this.registers.B;
      this.registers.R = (shl & 255) as uint8;
    }

    public shr(): void {
      const shr = this.registers.A >> this.registers.B;
      this.registers.R = shr as uint8;
    }
  };
}
