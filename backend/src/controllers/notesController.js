import Node from "../models/Node.js"

export async function getAllNotes(req,res){
    try {
        const notes = await Node.find().sort({createdAt: -1}) //newest first
        res.status(200).json(notes)
    } catch (error) {
        console.error("error in getAllNotes controller",error);

        res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req,res){
    try {
        const note = await Node.findById(req.params.id)
        res.status(200).json(note)
        if(!note) return res.status(404).json({message:"Note not found"})
    } catch (error) {
        console.error("Error in getNotebyId Controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function createANote(req,res){
    //for creating we need a title and content
    try {
        const {title,content} = req.body
        const note = new Node({title,content})

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNote Controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function updateANote(req,res){
    try{
        const {title,content} = req.body
        const updatedNote = await Node.findByIdAndUpdate(req.params.id,{title,content},
            {
                new:true
            }
        );
        if(!updatedNote) return res.status(404).json({message:"Note not found"})

        res.status(200).json(updatedNote)
    } catch(error) {
        console.error("Error in updatedANote Controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function deleteANote(req,res){
    try{
        const deletedNote = await Node.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"Note not found"})

        res.status(200).json({message:"Deteled note successfully!"})
    } catch(error){
        console.error("Error in deleteANote Controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}