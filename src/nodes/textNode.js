// textNode.js
import React, { useState, useMemo } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

// Utility: extract {{variable}} patterns
const extractVariables = (text) => {
  const regex = /{{(.*?)}}/g;
  const vars = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.push(match[1].trim());
  }
  return vars;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  // Extract all variables dynamically
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Auto-resize logic
  const computedHeight = Math.min(200, 40 + currText.length * 0.3);
  const computedWidth = Math.min(300, 150 + currText.length * 0.2);

  return (
    <BaseNode
      id={id}
      title="Text"
      description="Templated text node"
      style={{
        width: computedWidth,
        minHeight: computedHeight,
      }}
      handles={[
        {
          id: "output",
          type: "source",
          position: Position.Right,
          style: { top: "50%" },
        },
      ]}
    >
      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          resize: "none",
          padding: 5,
          fontSize: 12,
          border: "1px solid #aaa",
          borderRadius: 4,
        }}
      />

      {/* Dynamic input handles for variables */}
      {variables.map((v, index) => (
        <div key={v}>
          <Handle
            id={`${id}-${v}`}
            type="target"
            position={Position.Left}
            style={{
              top: `${25 + index * 15}%`,
              background: "#555",
              width: 10,
              height: 10,
            }}
          />
          <div style={{ fontSize: 11, marginLeft: 20, marginTop: -10 }}>
            {v}
          </div>
        </div>
      ))}
    </BaseNode>
  );
};
