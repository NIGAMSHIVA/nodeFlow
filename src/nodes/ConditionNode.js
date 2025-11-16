import React from "react";
import {BaseNode} from "./BaseNode";
import { Handle, Position } from "reactflow";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      description="Outputs True or False"
    >
      <Handle type="target" position={Position.Left} id="input" />
      <Handle type="source" position={Position.Right} id="true" />
      <Handle type="source" position={Position.Right} id="false" />
    </BaseNode>
  );
};
