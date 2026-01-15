import mongoose from "mongoose"

// 1-create a scheme
// 2- model based off of that schema

//create schema
export const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true
        },
        content:{
            type:String,
            required: true
        },
    },
    {timestamps: true} //createdAt, updatesAt
);

//create model
const Node = mongoose.model("Node",noteSchema);

//export model
export default Node;

