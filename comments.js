// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comment controller
const commentsController = require('../controllers/commentsController');

// Import auth controller
const authController = require('../controllers/authController');

// Import comment validation
const commentValidation = require('../validations/commentValidation');

// Import comment validation
const commentUpdateValidation = require('../validations/commentUpdateValidation');

// Import comment validation
const commentDeleteValidation = require('../validations/commentDeleteValidation');

// Import comment validation
const commentGetValidation = require('../validations/commentGetValidation');

// Get all comments
router.get('/', commentsController.getAllComments);

// Get all comments
router.get('/:id', commentGetValidation.validate('getComment'), commentsController.getComment);

// Create new comment
router.post('/', authController.verifyToken, commentValidation.validate('createComment'), commentsController.createComment);

// Update comment
router.put('/:id', authController.verifyToken, commentUpdateValidation.validate('updateComment'), commentsController.updateComment);

// Delete comment
router.delete('/:id', authController.verifyToken, commentDeleteValidation.validate('deleteComment'), commentsController.deleteComment);

// Export module
module.exports = router;
