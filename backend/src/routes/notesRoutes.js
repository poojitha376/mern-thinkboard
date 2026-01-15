import express from "express"
import {
    deleteANote, 
    updateANote, 
    createANote, 
    getAllNotes,
    getNoteById
} from "../controllers/notesController.js"

const router = express();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createANote);
router.put("/:id",updateANote);
router.delete("/:id",deleteANote);

export default router;