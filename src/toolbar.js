// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                {/* 5 New Nodes */}
                <DraggableNode type='add' label='Add' />
                <DraggableNode type='random' label='Random' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='formatter' label='Formatter' />

            </div>
        </div>
    );
};

