import { Button } from "@fiftyone/components";
import {
  executeOperator,
  Operator,
  OperatorConfig,
  registerOperator,
} from "@fiftyone/operators";
import * as fos from "@fiftyone/state";
import { colors, Typography } from "@mui/material";
import _ from "lodash";
import { motion } from "motion/react";
import { useCallback, useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  row-gap: 0.25em;
`;

export function HelloWorld() {
  const onClickAlert = useCallback(
    () => executeOperator("@voxel51/hello-world/show_alert"),
    []
  );
  const dataset = useRecoilValue(fos.dataset);

  const concatResult = useMemo(() => {
    const caption = _.concat(["Life gave us lemons,"], "so we concat 🍋").join(
      " "
    );
    return caption;
  }, []);

  return (
    <Container>
      <Typography variant="h3" color={colors.blueGrey[500]}>
        Hello, world!
      </Typography>
      <Typography color={colors.deepOrange[700]}>
        You are viewing the <em>{dataset?.name}</em> dataset
      </Typography>
      <Typography variant="caption">{concatResult}</Typography>
      <motion.div animate={{ x: 100 }}>
        <Button onClick={onClickAlert} style={{ width: "200px" }}>
          Show alert
        </Button>
      </motion.div>
    </Container>
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
