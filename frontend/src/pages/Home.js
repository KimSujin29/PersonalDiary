import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import { setEntries, deleteEntry } from "../store/diarySlice";
import DiaryList from "../components/DiaryList";

export default function Home() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.diary.entries);

  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await api.get("/diary");
        dispatch(setEntries(res.data));
      } catch (err) {
        console.error("Error fetching entries", err);
      }
    }
    fetchEntries();
  }, [dispatch]);

  async function handleDelete(id) {
    if (window.confirm("Delete this entry?")) {
      await api.delete(`/diary/${id}`);
      dispatch(deleteEntry(id));
    }
  }

  return (
    <div>
      <h2 className="mb-4" style={{ color: "#b09cd3ff" }}>My Diary</h2>
      <DiaryList entries={entries} onDelete={handleDelete} />
    </div>
  );
}