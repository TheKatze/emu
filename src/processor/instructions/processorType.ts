import Memory from "../memory.ts";
import { Register, uint8 } from "../../types.ts";

// deno-lint-ignore no-explicit-any
export type Processor = new (...args: any[]) => {
  get registers(): { [id in Register]: uint8 };
  get memory(): Memory;

  shouldHalt: boolean;
};
