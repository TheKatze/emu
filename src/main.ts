import { BinaryProcessor as Processor } from "./processor/binaryProcessor.ts";

const processor = new Processor("empty.bin");

processor.run();

console.table(processor.registers);
