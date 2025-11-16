import React from "react";
import {BaseNode} from "./BaseNode";
import { Handle, Position } from "reactflow";

export const RandomNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Random Number"
      description="Outputs a random number"
    >
      <Handle type="source" position={Position.Right} id="value" />
    </BaseNode>
  );
};
