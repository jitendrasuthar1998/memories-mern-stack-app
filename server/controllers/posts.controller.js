import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        //mongoose find method give us the array of object, and each object represent one document.

        const postMessages = await PostMessage.find();

        // console.log("postMessages are == ", postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    // console.log("post at createPost is == ", post)

    //with the help of new keyword, we can create new object, which will have default keys and the value will come from the object keys value pairs passed to that particular class which is used to create object.

    // so here, new PostMessage(post) will give us an object (post) which will have default keys of Post which is mentioned in postSchema.

    const newPost = new PostMessage(post);

    try {
        //newPost.save() method will save new object/ post document to Posts collection in database.

        await newPost.save()

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body

    console.log("id at updatePost is == ", _id);

    //checking if id is valid mongoose id or not.
    // if id is not valid mongoose id, then return an error.

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id")

    //and if it is valid mongoose id, then update that particular post with given id.
    // in mongoose findByIdAndUpdate method, if we don't pass new key as true, that time it will give us old object, with unchanged value.
    //but if pass new key as true, that time it will give us new object with updated values in it, and save that object into database.
    // and return that object, and then we can send it to user.

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    //checking if id is valid mongoose id or not.
    // if id is not valid mongoose id, then return an error.

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")


    //and if it is valid mongoose id, then delete that particular post with given id.

    await PostMessage.findOneAndRemove(id);
    res.json({ message: "Post deleted successfully" })
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    //checking if id is valid mongoose id or not.
    // if id is not valid mongoose id, then return an error.

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost)

}