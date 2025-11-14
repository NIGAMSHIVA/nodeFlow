
// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      description="Pipeline exit"
      handles={[
        {
          id: 'value',
          type: 'target',
          position: Position.Left,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span>Name:</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ padding: 4, fontSize: 12 }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span>Type:</span>
          <select
            value={outputType}
            onChange={handleTypeChange}
            style={{ padding: 4, fontSize: 12 }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

