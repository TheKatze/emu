import { Processor } from "./processorType.ts";

export default function MiscProcessor<TProcessor extends Processor>(
  Base: TProcessor
) {
  return class MiscProcessor extends Base {
    public noop(): void {}
    public hlt(): void {
      this.shouldHalt = true;
    }
  };
}
