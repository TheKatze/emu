import ArithmeticProcessor from "./instructions/arithmetic.ts";
import BitwiseProcessor from "./instructions/bitwise.ts";
import ConditionalProcessor from "./instructions/conditional.ts";
import RegisterProcessor from "./instructions/registers.ts";
import MemoryProcessor from "./instructions/memory.ts";
import ProcessorBase from "./processorBase.ts";
import MiscProcessor from "./instructions/misc.ts";
import { Instruction, Instructions } from "./instructions/instructions.ts";

const AssemblyInstructions: { [id: string]: Instruction } = Instructions.reduce(
  (all, instruction) => ({
    ...all,
    [instruction.assemblyName]: instruction,
  }),
  {}
);

class Processor extends ProcessorBase {
  constructor() {
    super(new Array(256 * 256));
  }

  public run(): void {
    console.table(AssemblyInstructions);
  }
}

export const AssemblyProcessor = ConditionalProcessor(
  // memory access
  MemoryProcessor(
    // register operations
    RegisterProcessor(
      // bitwise operations
      BitwiseProcessor(
        // arithmetic operations
        ArithmeticProcessor(
          // sundry
          MiscProcessor(Processor)
        )
      )
    )
  )
);
