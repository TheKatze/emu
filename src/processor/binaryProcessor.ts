import ArithmeticProcessor from "./instructions/arithmetic.ts";
import BitwiseProcessor from "./instructions/bitwise.ts";
import ConditionalProcessor from "./instructions/conditional.ts";
import RegisterProcessor from "./instructions/registers.ts";
import MemoryProcessor from "./instructions/memory.ts";

import { uint8 } from "../types.ts";
import ProcessorBase from "./processorBase.ts";

class Processor extends ProcessorBase {
  constructor(memoryFile: string) {
    super(Array.from(Deno.readFileSync(memoryFile)) as uint8[]);
  }

  public run(): void {}
}

// conditionals
export const BinaryProcessor = ConditionalProcessor(
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
