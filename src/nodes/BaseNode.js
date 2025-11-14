// BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  description,
  handles = [],
  style = {},
  children,
}) => {
  const baseStyle = {
    width: 220,
    minHeight: 80,
    border: '1px solid #222',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  };

  const headerStyle = {
    fontWeight: 600,
    fontSize: 13,
    marginBottom: 2,
  };

  const descStyle = {
    color: '#555',
    fontSize: 11,
  };

  return (
    <div style={{ ...baseStyle, ...style }}>
      <div style={headerStyle}>{title}</div>
      {description && <div style={descStyle}>{description}</div>}

      {/* Node-specific controls/content */}
      {children}

      {/* Handles configuration */}
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style}
        />
      ))}
    </div>
  );
};
