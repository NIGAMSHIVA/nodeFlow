

// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      description="Pipeline entry"
      handles={[
        {
          id: 'value',
          type: 'source',
          position: Position.Right,
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
            value={inputType}
            onChange={handleTypeChange}
            style={{ padding: 4, fontSize: 12 }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

