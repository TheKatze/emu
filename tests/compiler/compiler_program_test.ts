import Compiler from "../../src/compiler/compiler.ts";
import { assertEquals } from "../deps.ts";

Deno.test({
  name: "Should compile Fibonacci",
  fn: () => {
    const program = [
      "lda 1",
      "add",
      "jif 0 11",
      "swp",
      "rta",
      "jmp 0 2",
      "hlt",
    ];

    const compiler = new Compiler(program.join("\n"));

    const binary = compiler.compile();

    assertEquals(
      binary,
      [0x80, 0x01, 0x04, 0xc1, 0x00, 0x0b, 0x20, 0x21, 0xc0, 0x00, 0x02, 0xff]
    );
  },
});
