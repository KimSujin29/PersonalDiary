import React from "react";
import DiaryCard from "./DiaryCard";

export default function DiaryList({ entries, onDelete }) {
  if (!entries.length) {
    return (
      <div className="text-center text-muted py-5">
        <h5>No diary entries yet</h5>
        <p>Click "New Entry" to write your first note.</p>
      </div>
    );
  }

  return (
    <div className="row gy-3">
      {entries.map((entry) => (
        <div className="col-md-6" key={entry._id}>
          <DiaryCard entry={entry} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}