import Memory from "./memory.ts";
import { Register, uint8 } from "./types.ts";
import ArithmeticProcessor from "./instructions/arithmetic.ts";
import BitwiseProcessor from "./instructions/bitwise.ts";
import RegisterProcessor from "./instructions/registers.ts";
import MemoryProcessor from "./instructions/memory.ts";
import ConditionalProcessor from "./instructions/conditional.ts";

class ProcessorBase {
  public registers: { [id in Register]: uint8 } = {
    A: 0b0000_0000,
    B: 0b0000_0000,
    R: 0b0000_0000,
    IP: 0b0000_0000,
    FLAGS: 0b0000_0000,
  };

  public memory = new Memory();
}

// conditionals
export default ConditionalProcessor(
  // memory access
  MemoryProcessor(
    // register operations
    RegisterProcessor(
      // bitwise operations
      BitwiseProcessor(
        // arithmetic operations
        ArithmeticProcessor(ProcessorBase)
      )
    )
  )
);
