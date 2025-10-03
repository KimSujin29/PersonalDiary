// backend/routes/diary.js
const express = require('express');
const router = express.Router();
const DiaryEntry = require('../models/DiaryEntry');

// GET all diary entries (most recent first)
router.get('/', async (req, res) => {
  try {
    const entries = await DiaryEntry.find().sort({ entryDate: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET single entry
router.get('/:id', async (req, res) => {
  try {
    const entry = await DiaryEntry.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create entry
router.post('/', async (req, res) => {
  try {
    const { title, content, mood, tags, entryDate } = req.body;
    const entry = new DiaryEntry({
      title,
      content,
      mood: mood || 'neutral',
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : []),
      entryDate: entryDate ? new Date(entryDate) : Date.now()
    });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT update entry
router.put('/:id', async (req, res) => {
  try {
    const updated = await DiaryEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Entry not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE entry
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await DiaryEntry.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
