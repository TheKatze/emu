import { Processor } from "./processorType.ts";

export default function MemoryAccessingProcessor<TProcessor extends Processor>(
  Base: TProcessor
) {
  return class MemoryAccessingProcessor extends Base {
    /// Save R to memory location AB
    public save(): void {
      this.memory.save(this.registers.A, this.registers.B, this.registers.R);
    }
    /// Load R from memory location AB
    public load(): void {
      this.registers.R = this.memory.load(this.registers.A, this.registers.B);
    }
  };
}
