// backend/models/DiaryEntry.js
const mongoose = require('mongoose');

const DiaryEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  mood: { type: String, default: 'neutral' }, // e.g., happy, sad, excited
  tags: [{ type: String }],
  entryDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DiaryEntry', DiaryEntrySchema);
