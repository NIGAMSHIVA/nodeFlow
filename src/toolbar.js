// toolbar.js

import { DraggableNode } from './draggableNode';
import './PipelineToolbar.css';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            {/* Core Nodes */}
            <DraggableNode type="customInput" label="Input" className="tool-btn" />
            <DraggableNode type="llm" label="LLM" className="tool-btn" />
            <DraggableNode type="customOutput" label="Output" className="tool-btn" />
            <DraggableNode type="text" label="Text" className="tool-btn" />

            {/* Added 5 New Nodes */}
            <DraggableNode type="add" label="Add" className="tool-btn" />
            <DraggableNode type="random" label="Random" className="tool-btn" />
            <DraggableNode type="delay" label="Delay" className="tool-btn" />
            <DraggableNode type="condition" label="Condition" className="tool-btn" />
            <DraggableNode type="formatter" label="Formatter" className="tool-btn" />
        </div>
    );
};
