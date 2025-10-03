import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import { setEntries } from "../store/diarySlice";
import DiaryForm from "../components/DiaryForm";

export default function EditEntry() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    async function fetchEntry() {
      const res = await api.get(`/diary/${id}`);
      setEntry(res.data);
    }
    fetchEntry();
  }, [id]);

  async function handleUpdate(data) {
    const res = await api.put(`/diary/${id}`, data);
    // reload entries after update
    const all = await api.get("/diary");
    dispatch(setEntries(all.data));
    navigate("/");
  }

  return (
    <div className="col-md-8 mx-auto">
      <h2 className="mb-4" style={{ color: "#b09cd3ff" }}>Edit Diary Entry</h2>
      {entry ? <DiaryForm onSubmit={handleUpdate} initialData={entry} /> : <p>Loading...</p>}
    </div>
  );
}
