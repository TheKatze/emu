import Processor from "./processor.ts";

const processor = new Processor();

processor.lda(0);
processor.ldb(1);

while (!processor.registers.FLAGS) {
  processor.add();
  processor.rta();

  processor.swp();

  console.table(processor.registers.R);
}
