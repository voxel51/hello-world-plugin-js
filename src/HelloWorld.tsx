import { Button } from "@fiftyone/components";
import {
  executeOperator,
  Operator,
  OperatorConfig,
  registerOperator,
} from "@fiftyone/operators";
import * as fos from "@fiftyone/state";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";

export function HelloWorld() {
  const onClickAlert = useCallback(
    () => executeOperator("@voxel51/hello-world/show_alert"),
    []
  );
  const dataset = useRecoilValue(fos.dataset);

  return (
    <>
      <h1>Hello, world!</h1>
      <h2>
        You are viewing the <strong>{dataset?.name}</strong> dataset
      </h2>
      <Button onClick={onClickAlert}>Show alert</Button>
    </>
  );
}

class AlertOperator extends Operator {
  get config() {
    return new OperatorConfig({
      name: "show_alert",
      label: "Show alert",
      unlisted: true,
    });
  }
  async execute() {
    alert(`Hello from plugin ${this.pluginName}`);
  }
}

registerOperator(AlertOperator, "@voxel51/hello-world");
