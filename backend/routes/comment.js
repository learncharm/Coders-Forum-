const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Comment = require('../models/Comment');
const { body, validationResult } = require('express-validator');

// Route 1 : Get all Comments on particular Thread using : GET "/api/comment/fetchallcomments". No Login required

router.get('/fetchallcomments/:id', async (req, res) => {
    const comments = await Comment.find({ threadid: req.params.id });
    res.json(comments);
})

// Route 1.2 : Get all Comments of particular user using : GET "/api/comment/fetchusercomments". Login required

router.get('/fetchusercomments', fetchuser,async (req, res) => {
    const comments = await Comment.find({ userid: req.user.id});
    res.json(comments);
})

// Route 1.2 : Get all Comments using : GET "/api/comment/allcomments". No Login required

router.get('/allcomments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
})

// Route 2 : Add a new Comment using : POST "/api/comment/addcomment". Login required

router.post('/addcomment/:id', fetchuser, [
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { description } = req.body;

        // if there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const comment = new Comment({
            description, userid: req.user.id ,threadid: req.params.id
        })
        const saveComment = await comment.save();

        res.json(saveComment);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Update an existing Comment using : PUT "api/comment/updatecomment". Login Required

router.put('/updatecomment/:id', fetchuser, async (req, res) => {
    const { description } = req.body;

    try {

        // Create a new Comment object
        const newComment = {};

        if (description) { newComment.description = description }

        // Find the note to be updated and update it
        let comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send("Not Found");
        }

        if (comment.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        comment = await Comment.findByIdAndUpdate(req.params.id, { $set: newComment }, { new: true });

        res.json({ comment });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 : Delete an existing Comment using : DELETE "api/comment/deletecomment". Login Required

router.delete('/deletecomment/:id', fetchuser, async (req, res) => {

    try {

        // Find the comment to be deleted and delete it
        let comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns this Comment
        if (comment.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        comment = await Comment.findByIdAndDelete(req.params.id);

        res.json({ Success: "Comment has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;