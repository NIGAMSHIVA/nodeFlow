

// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      description="Large language model"
      handles={[
        {
          id: 'system',
          type: 'target',
          position: Position.Left,
          style: { top: '30%' },
        },
        {
          id: 'input',
          type: 'target',
          position: Position.Left,
          style: { top: '70%' },
        },
        {
          id: 'response',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    >
      <div style={{ fontSize: 12 }}>
        <span>This is an LLM node.</span>
      </div>
    </BaseNode>
  );
};

