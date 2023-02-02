// Require express router
const router = require('express').Router();

// Set requirements
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controller/thoughts-controller');

// -- <GET>
router.route('/').get(getAllThoughts);

// -- <GET, PUT, DELETE>
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// -- <POST>
router.route('/:userId').post(createThoughts);

// -- <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// -- <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;