import ArithmeticProcessor from "./instructions/arithmetic.ts";
import BitwiseProcessor from "./instructions/bitwise.ts";
import ConditionalProcessor from "./instructions/conditional.ts";
import RegisterProcessor from "./instructions/registers.ts";
import MemoryProcessor from "./instructions/memory.ts";
import ProcessorBase from "./processorBase.ts";

class Processor extends ProcessorBase {
  constructor() {
    super(new Array(256 * 256));
  }

  public run(): void {}
}

export const AssemblyProcessor = ConditionalProcessor(
  // memory access
  MemoryProcessor(
    // register operations
    RegisterProcessor(
      // bitwise operations
      BitwiseProcessor(
        // arithmetic operations
        ArithmeticProcessor(Processor)
      )
    )
  )
);
