const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Thread = require('../models/Thread');
const { body, validationResult } = require('express-validator');

// Route 1 : Add a new Thread using : POST "/api/thread/addthread". Login required

router.post('/addthread', fetchuser, [
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
            title, description, userid: req.user.id
        })
        const saveThread = await thread.save();

        res.json(saveThread);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;