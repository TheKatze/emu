import ProcessorBase from "../../src/processor/processorBase.ts";

export default class TestProcessor extends ProcessorBase {
  constructor() {
    super(new Array(256 * 256));
  }

  public run(): void {}
}
