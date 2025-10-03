import React from "react";
import { Link } from "react-router-dom";

export default function DiaryCard({ entry, onDelete }) {
  const date = new Date(entry.entryDate || entry.createdAt).toLocaleString();

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between mb-2">
          <h5 className="card-title">{entry.title}</h5>
          <small className="text-muted">{date}</small>
        </div>

        <p className="card-text flex-grow-1">{entry.content}</p>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            {entry.tags?.map((tag, i) => (
              <span key={i} className="badge bg-secondary me-1">{tag}</span>
            ))}
            <span className="ms-2 text-muted">• {entry.mood}</span>
          </div>
          <div>
            <Link
              to={`/edit/${entry._id}`}
              className="btn btn-sm btn-outline-primary me-2"
            >
              Edit
            </Link>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDelete(entry._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
