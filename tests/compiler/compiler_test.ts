import Compiler from "../../src/compiler/compiler.ts";
import { assertEquals, assertThrows } from "../deps.ts";

Deno.test({
  name: "Should handle empty lines gracefully",
  fn: () => {
    const program = ["lda 1", "", "ldb 2", "", "", "", "add", "hlt"];

    const compiler = new Compiler(program.join("\n"));

    const binary = compiler.compile();

    assertEquals(binary, [0x80, 0x01, 0x81, 0x02, 0x04, 0xff]);
  },
});

Deno.test({
  name: "Should throw syntax error on invalid assembly instruction",
  fn: () => {
    const program = ["noop", "derp"];

    const compiler = new Compiler(program.join("\n"));

    assertThrows(() => compiler.compile(), Error, "Syntax Error.");
  },
});

Deno.test({
  ignore: true,
  name: "Should convert hexadecimal literals to uint8",
  fn: () => {
    const program = ["lda 0xAF", "ldb 0x3A", "jmp 0x53 0x82"];

    const compiler = new Compiler(program.join("\n"));

    const binary = compiler.compile();

    assertEquals(binary, [0x80, 0xaf, 0x81, 0x3a, 0xc0, 0x53, 0x82]);
  },
});
