import { Button } from "@fiftyone/components";
import {
  executeOperator,
  Operator,
  OperatorConfig,
  registerOperator,
} from "@fiftyone/operators";
import * as fos from "@fiftyone/state";
import { colors, Typography } from "@mui/material";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";

export function HelloWorld() {
  const onClickAlert = useCallback(
    () => executeOperator("@voxel51/hello-world/show_alert"),
    []
  );
  const dataset = useRecoilValue(fos.dataset);

  return (
    <div style={{ margin: "1em" }}>
      <Typography variant="h2" color={colors.blueGrey[500]}>
        Hello, world!
      </Typography>
      <Typography color={colors.deepOrange[700]}>
        You are viewing the <em>{dataset?.name}</em> dataset
      </Typography>
      <Button onClick={onClickAlert} style={{ marginTop: "0.5em" }}>
        Show alert
      </Button>
    </div>
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
