import {
  Instruction,
  Instructions,
} from "../processor/instructions/instructions.ts";
import { uint8 } from "../types.ts";

const AssemblyInstructions: { [id: string]: Instruction } = Instructions.reduce(
  (all, instruction) => ({
    ...all,
    [instruction.assemblyName]: instruction,
  }),
  {}
);

export default class Compiler {
  private program: string;

  constructor(program: string) {
    this.program = program;
  }

  compile(): uint8[] {
    const lines = this.program
      .split("\n")
      .map((instruction) => instruction.trim().toLowerCase());

    const binary = [];

    for (const line of lines) {
      const parameters = line.split(" ").map((parameter) => parameter.trim());

      if (!parameters[0]) {
        continue;
      }

      const instruction = AssemblyInstructions[parameters[0]];

      if (instruction === undefined) {
        throw Error("Syntax Error.");
      }

      binary.push(instruction.binary);

      [...new Array(instruction.paramCount).keys()].map((index) =>
        binary.push(parseInt(parameters[index + 1]) as uint8)
      );
    }

    return binary as uint8[];
  }
}
