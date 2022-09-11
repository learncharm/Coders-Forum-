const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Thread = require('../models/Thread');
const { body, validationResult } = require('express-validator');

// Route 1 : Get all Threads of user using : GET "/api/thread/fetchallthreads". Login required

router.get('/fetchuserthreads', fetchuser, async (req, res) => {
    const threads = await Thread.find({ userid: req.user.id });
    res.json(threads);
})

// Route 1.1 : Get all Threads of particular category using : GET "/api/thread/fetchallthreads". No Login required

router.get('/fetchallthreads/:category', async (req, res) => {
    const threads = await Thread.find({ category: req.params.category });
    res.json(threads);
})

// Route 1.2 : Get all Threads using : GET "/api/thread/allthreads". No Login required

router.get('/allthreads', async (req, res) => {
    const threads = await Thread.find();
    res.json(threads);
})

// Route 2 : Add a new Thread using : POST "/api/thread/addthread". Login required

router.post('/addthread/:category', fetchuser, [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description } = req.body;

        // if there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const thread = new Thread({
            title, description, userid: req.user.id,category: req.params.category
        })
        const saveThread = await thread.save();

        res.json(saveThread);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Update an existing Thread using : PUT "api/thread/updatethread". Login Required

router.put('/updatethread/:id', fetchuser, async (req, res) => {
    const { title, description } = req.body;

    try {

        // Create a new Thread object
        const newThread = {};

        if (title) { newThread.title = title }
        if (description) { newThread.description = description }

        // Find the note to be updated and update it
        let thread = await Thread.findById(req.params.id);
        if (!thread) {
            return res.status(404).send("Not Found");
        }

        if (thread.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        thread = await Thread.findByIdAndUpdate(req.params.id, { $set: newThread }, { new: true });

        res.json({ thread });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 : Delete an existing Thread using : DELETE "api/thread/deletethread". Login Required

router.delete('/deletethread/:id', fetchuser, async (req, res) => {

    try {

        // Find the note to be deleted and delete it
        let thread = await Thread.findById(req.params.id);
        if (!thread) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns this Thread
        if (thread.userid.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        thread = await Thread.findByIdAndDelete(req.params.id);

        res.json({ Success: "Thread has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 5 : Delete an existing Thread using : DELETE "api/thread/deletethreadbyadmin".

router.delete('/deletethreadbyadmin/:id', async (req, res) => {

    try {

        // Find the note to be deleted and delete it
        let thread = await Thread.findById(req.params.id);
        if (!thread) {
            return res.status(404).send("Not Found");
        }

        thread = await Thread.findByIdAndDelete(req.params.id);

        res.json({ Success: "Thread has been Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;