import { data } from "../repositories/data.js";
import { generateID } from "../helpers/utils.js";

let notes = data;

export const getNotes = (req, res) => {
  res.send(notes);
};

export const createNote = (req, res) => {
  const note = req.body;
  notes.push({ ...note, ID: generateID() });
  res.send(`New note "${note.Name}" added to the database`);
};

export const getNoteByID = (req, res) => {
  const getNoteIndex = notes.findIndex((note) => note.ID === req.params.id);
  res.send(notes[getNoteIndex]);
};

export const updateNoteByID = (req, res) => {
  const getNoteIndex = notes.findIndex((note) => note.ID === req.params.id);
  const note = notes[getNoteIndex];
  const { Name, Category, Content } = req.body;

  if (Name) note.Name = Name;
  if (Category) note.Category = Category;
  if (Content) note.Content = Content;

  res.send(`This note was updated - ${req.params.id}`);
};

export const deleteNoteByID = (req, res) => {
  notes = notes.filter((note) => note.ID !== req.params.id);
  res.send(`Note with ID - ${req.params.id} removed from database`);
};

export const showNotesStatistic = (req, res) => {
  const categories = new Set();
  notes.map((note) => categories.add(note.Category));
  const notesPerCategory = [];
  categories.forEach((category) => {
    notesPerCategory.push({
      [category]: notes.filter((note) => note.Category === category).length,
    });
  });
  res.send(notesPerCategory);
};
