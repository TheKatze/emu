import { Flags, uint8 } from "../../types.ts";
import { Processor } from "./processorType.ts";

export default function ArithmeticProcessor<TProcessor extends Processor>(
  Base: TProcessor,
) {
  return class ArithmeticProcessor extends Base {
    public add(): void {
      const add = this.registers.A + this.registers.B;
      const result = (add & 255) as uint8;

      if (result < add) {
        this.registers.FLAGS = Flags.Carry;
      }

      this.registers.R = result;
    }

    public sub(): void {
      const sub = this.registers.A - this.registers.B;
      const result = sub < -1 ? 0 : (sub as uint8);

      if (result > sub) {
        this.registers.FLAGS = Flags.Carry;
      }

      this.registers.R = result;
    }

    public mul(): void {
      const mul = this.registers.A * this.registers.B;
      const result = (mul & 255) as uint8;

      if (result < mul) {
        this.registers.FLAGS = Flags.Carry;
      }

      this.registers.R = result;
    }

    public div(): void {
      if (this.registers.B == 0) {
        this.registers.FLAGS = Flags.DivisionByZero;
        return;
      }

      const result = this.registers.A / this.registers.B;
      this.registers.R = result as uint8;
    }
  };
}
