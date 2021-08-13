import { uint8 } from "../../types.ts";
import { Processor } from "./processorType.ts";

export default function RegisterProcessor<TProcessor extends Processor>(
  Base: TProcessor,
) {
  return class RegisterProcessor extends Base {
    public swp(): void {
      [this.registers.A, this.registers.B] = [
        this.registers.B,
        this.registers.A,
      ];
    }

    public rta(): void {
      this.registers.A = this.registers.R;
    }

    public rtb(): void {
      this.registers.B = this.registers.R;
    }

    public lda(value: uint8): void {
      this.registers.A = value;
    }

    public ldb(value: uint8): void {
      this.registers.B = value;
    }

    public clf(): void {
      this.registers.FLAGS = 0b0000_0000;
    }
  };
}
