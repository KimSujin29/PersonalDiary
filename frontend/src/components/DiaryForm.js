import React, { useState, useEffect } from "react";

export default function DiaryForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("neutral");
  const [tags, setTags] = useState("");
  const [entryDate, setEntryDate] = useState("");

  // Populate form if initialData is provided
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setMood(initialData.mood || "neutral");
      setTags(initialData.tags?.join(", ") || "");
      setEntryDate(
        initialData.entryDate
          ? new Date(initialData.entryDate).toISOString().slice(0, 16)
          : ""
      );
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required.");
      return;
    }
    onSubmit({
      title,
      content,
      mood,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      entryDate: entryDate ? new Date(entryDate) : undefined,
    });

    // Only reset if creating new entry, not updating
    if (!initialData) {
      setTitle("");
      setContent("");
      setMood("neutral");
      setTags("");
      setEntryDate("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm p-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="A meaningful title"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          rows="6"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your diary entry here..."
        />
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Mood</label>
          <select
            className="form-select"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="excited">Excited</option>
            <option value="angry">Angry</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Tags</label>
          <input
            type="text"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. travel, thoughts"
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </div>
      </div>

      <button
  type="submit"
  className="btn w-100 mt-3"
  style={{ backgroundColor: "#b09cd3ff", color: "#fff" }}
>
  {initialData ? "Update Entry" : "Save Entry"}
</button>

    </form>
  );
}
