import { Processor } from "./processorType.ts";

export default function ConditionalProcessor<TProcessor extends Processor>(
  Base: TProcessor
) {
  return class ConditionalProcessor extends Base {
    public jmp(): void {}
  };
}
