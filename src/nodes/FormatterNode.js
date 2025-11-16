import React from "react";
import {BaseNode} from "./BaseNode";
import { Handle, Position } from "reactflow";

export const FormatterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Formatter"
      description="Formats text"
    >
      <Handle type="target" position={Position.Left} id="input" />
      <Handle type="source" position={Position.Right} id="formatted" />
    </BaseNode>
  );
};
