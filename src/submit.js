// submit.js

// submit.js

import React from "react";
import axios from "axios";
import { useStore } from "./store";

export const SubmitButton = () => {
  const handleSubmit = async () => {
    // 1️⃣ Get nodes & edges from ReactFlow global store
    const nodes = useStore.getState().nodes;
    const edges = useStore.getState().edges;

    const payload = { nodes, edges };

    try {
      // 2️⃣ Send to backend /pipelines/parse
      const res = await axios.post(
        "http://localhost:8000/pipelines/parse",
        payload
      );

      const { num_nodes, num_edges, is_dag } = res.data;

      // 3️⃣ Show result as alert (required by assignment)
      alert(
        `Pipeline Analysis:\n\nNodes: ${num_nodes}\nEdges: ${num_edges}\nIs DAG: ${
          is_dag ? "Yes ✅" : "No ❌"
        }`
      );
    } catch (err) {
      console.error(err);
      alert("❌ Error: Could not connect to backend.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          background: "#3b82f6",
          border: "none",
          borderRadius: "6px",
          color: "white",
        }}
      >
        Submit
      </button>
    </div>
  );
};

