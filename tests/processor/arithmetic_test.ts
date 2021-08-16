import { assertEquals } from "../deps.ts";

import TestProcessor from "./base/testProcessor.ts";
import ArithmeticProcessor from "../../src/processor/instructions/arithmetic.ts";
import { Flags } from "../../src/types.ts";

const Processor = ArithmeticProcessor(TestProcessor);

Deno.test({
  name: "Should add without overflow",
  fn: () => {
    const processor = new Processor();

    processor.registers.A = 0b0101_0101;
    processor.registers.B = 0b0101_0101;

    processor.add();

    assertEquals(processor.registers.R, 0b1010_1010);
  },
});

Deno.test({
  name: "Should add with overflow and set carry flag",
  fn: () => {
    const processor = new Processor();

    processor.registers.A = 0b1001_0101;
    processor.registers.B = 0b1000_0001;

    processor.add();

    assertEquals(processor.registers.R, 0b0001_0110);
    assertEquals(processor.registers.FLAGS, Flags.Carry);
  },
});
