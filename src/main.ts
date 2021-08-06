import { BinaryProcessor as Processor } from "./processor/binaryProcessor.ts";
import { Instructions } from "./processor/instructions/instructions.ts";

const processor = new Processor("empty.bin");

processor.run();

console.table(processor.registers);
console.table(Instructions);
