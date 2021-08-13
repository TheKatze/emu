import ArithmeticProcessor from "./instructions/arithmetic.ts";
import BitwiseProcessor from "./instructions/bitwise.ts";
import ConditionalProcessor from "./instructions/conditional.ts";
import RegisterProcessor from "./instructions/registers.ts";
import MemoryProcessor from "./instructions/memory.ts";

import { Flags, uint8 } from "../types.ts";
import ProcessorBase from "./processorBase.ts";
import MiscProcessor from "./instructions/misc.ts";
import { Instruction, Instructions } from "./instructions/instructions.ts";

const BinaryInstructions: { [id: number]: Instruction } = Instructions.reduce(
  (all, instruction) => ({
    ...all,
    [instruction.binary]: instruction,
  }),
  {}
);

class Processor extends ProcessorBase {
  constructor(memoryFile: string) {
    super(Array.from(Deno.readFileSync(memoryFile)) as uint8[]);
  }

  public run(): void {
    while (!this.shouldHalt) {
      const binaryInstruction = this.memory.load(
        this.registers.IPH,
        this.registers.IPL
      );
      const instruction = BinaryInstructions[binaryInstruction];

      const parameters = [...Array(instruction.paramCount).keys()].map(
        (index) => {
          const increments = this.splitInt(this.registers.IPL + (index + 1));
          return this.memory.load(increments.high, increments.low);
        }
      );

      // deno-lint-ignore no-explicit-any
      (this as any)[instruction.assemblyName](...parameters);

      // skip incrementing the instruction pointer after a jump
      if (this.registers.FLAGS & Flags.HasJumped) {
        this.registers.FLAGS = (this.registers.FLAGS &
          ~Flags.HasJumped) as uint8;

        continue;
      }
      this.incrementInstructionPointer(instruction.paramCount);
    }
  }
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
        ArithmeticProcessor(
          // sundry
          MiscProcessor(Processor)
        )
      )
    )
  )
);
