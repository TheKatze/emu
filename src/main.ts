import {
  AssemblyInstructions,
  BinaryInstructions,
} from "./processor/instructions/instructions.ts";
import { BinaryProcessor as Processor } from "./processor/binaryProcessor.ts";

const processor = new Processor("empty.bin");

processor.run();

console.table(AssemblyInstructions);
console.table(BinaryInstructions);
