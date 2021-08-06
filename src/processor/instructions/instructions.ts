import { uint8 } from "../../types.ts";

export interface Instruction {
  assemblyName: string;
  binary: uint8;
  paramCount: 0 | 1 | 2;
}

const Instructions: Instruction[] = [
  // Arithmetic
  { assemblyName: "add", binary: 0b0000_0100, paramCount: 0 },
  { assemblyName: "sub", binary: 0b0000_0101, paramCount: 0 },
  { assemblyName: "mul", binary: 0b0000_0110, paramCount: 0 },
  { assemblyName: "div", binary: 0b0000_0111, paramCount: 0 },
  // Bitwise
  { assemblyName: "not", binary: 0b0000_1000, paramCount: 0 },
  { assemblyName: "and", binary: 0b0000_1000, paramCount: 0 },
  { assemblyName: "xor", binary: 0b0000_1000, paramCount: 0 },
  { assemblyName: "or", binary: 0b0000_1000, paramCount: 0 },
  { assemblyName: "shl", binary: 0b0000_1000, paramCount: 0 },
  { assemblyName: "shr", binary: 0b0000_1000, paramCount: 0 },
  // Conditional
  { assemblyName: "jmp", binary: 0b1100_0000, paramCount: 2 },
  { assemblyName: "jif", binary: 0b1100_0001, paramCount: 2 },
  { assemblyName: "jeq", binary: 0b1100_0010, paramCount: 2 },
  { assemblyName: "jne", binary: 0b1100_0011, paramCount: 2 },
  { assemblyName: "jgt", binary: 0b1100_0100, paramCount: 2 },
  { assemblyName: "jlt", binary: 0b1100_0101, paramCount: 2 },
  // Memory
  { assemblyName: "save", binary: 0b0000_0010, paramCount: 0 },
  { assemblyName: "load", binary: 0b0000_0011, paramCount: 0 },
  // Registers
  { assemblyName: "lda", binary: 0b1000_0000, paramCount: 1 },
  { assemblyName: "ldb", binary: 0b1000_0001, paramCount: 1 },
  { assemblyName: "swp", binary: 0b0010_0000, paramCount: 0 },
  { assemblyName: "rta", binary: 0b0010_0001, paramCount: 0 },
  { assemblyName: "rtb", binary: 0b0010_0010, paramCount: 0 },
  { assemblyName: "clf", binary: 0b0010_0011, paramCount: 0 },
];

export const BinaryInstructions: { [id: number]: Instruction } =
  Instructions.reduce(
    (all, instruction) => ({
      ...all,
      [instruction.binary]: instruction,
    }),
    {}
  );

export const AssemblyInstructions: { [id: string]: Instruction } =
  Instructions.reduce(
    (all, instruction) => ({
      ...all,
      [instruction.assemblyName]: instruction,
    }),
    {}
  );
