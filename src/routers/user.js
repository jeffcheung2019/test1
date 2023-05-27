const express = require('express');
const router = express.Router();


// GET /users
router.get('/', (req, res) => {
    // Return a list of all users
    res.send('/users response');
});

// GET /users/:id
router.get('/:id', (req, res) => {
    console.log(`user id: ${req.params.id}`)
    // Return the user with the specified ID
    res.send(`/users/id :  ${req.params.id}`);
});

// POST /users
router.post('/', (req, res) => {
    // Create a new user with the data in the request body
});

// PUT /users/:id
router.put('/:id', (req, res) => {
    // Update the user with the specified ID using the data in the request body
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
    // Delete the user with the specified ID
});


module.exports = router;