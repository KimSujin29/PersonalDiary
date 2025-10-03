import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { addEntry } from "../store/diarySlice";
import DiaryForm from "../components/DiaryForm";

export default function NewEntry() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleAdd(data) {
    try {
      const res = await api.post("/diary", data);
      dispatch(addEntry(res.data));
      navigate("/");
    } catch (err) {
      console.error("Error adding entry", err);
    }
  }

  return (
    <div className="col-md-8 mx-auto">
      <h2 className="mb-4" style={{ color: "#b09cd3ff" }}>Add a New Diary Entry</h2>
      <DiaryForm onSubmit={handleAdd} />
    </div>
  );
}