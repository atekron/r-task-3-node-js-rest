import express from "express";

import notesRoutes from "./routes/notes.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/notes", notesRoutes);

app.get("/", (req, res) => res.send("[HOMEPAGE]"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}  ...`)
);
