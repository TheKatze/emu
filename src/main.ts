import Compiler from "./compiler/compiler.ts";

const program = ["lda 1", "add", "jif 0 11", "swp", "rta", "jmp 0 2", "hlt"];

const compiler = new Compiler(program.join("\n"));

console.log(compiler.compile());
