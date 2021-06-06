import express from "express";
import {
  getNotes,
  createNote,
  getNoteByID,
  updateNoteByID,
  deleteNoteByID,
  showNotesStatistic,
} from "../services/notes.js";
import { validation } from "../middlewares/validation.js";
import { noteSchema } from "../validations/noteValidation.js";
import { noteUpdate } from "../validations/noteUpdate.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/stats", showNotesStatistic);
router.get("/:id", getNoteByID);
router.delete("/:id", deleteNoteByID);
router.patch("/:id", validation(noteUpdate), updateNoteByID);
router.post("/", validation(noteSchema), createNote);

export default router;
