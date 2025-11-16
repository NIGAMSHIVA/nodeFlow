import React from "react";
import {BaseNode} from "./BaseNode";
import { Handle, Position } from "reactflow";

export const AddNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Add (A + B)"
      description="Outputs the sum of A and B"
    >
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Left} id="b" />
      <Handle type="source" position={Position.Right} id="result" />
    </BaseNode>
  );
};
