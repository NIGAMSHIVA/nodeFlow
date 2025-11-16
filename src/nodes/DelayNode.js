import React from "react";
import {BaseNode} from "./BaseNode";
import { Handle, Position } from "reactflow";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      description="Represents a time delay"
    >
      <Handle type="target" position={Position.Left} id="input" />
      <Handle type="source" position={Position.Right} id="output" />
    </BaseNode>
  );
};
