import React from "react";

export default function NoteCard({
  title,
  setCurrentEditing,
  index,
  deleteNote,
}) {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <div style={{ display: "flex", alignItems: "center",gap: "10px", justifyContent: "space-between" }}>
        <h2
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "normal",
            cursor: "pointer",
            flex: "1",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          onClick={() => setCurrentEditing(index)}
        >
          {title}
        </h2>
        <button
          style={{
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={() => deleteNote(index)}
        >
          -
        </button>
      </div>
    </div>
  );
}
