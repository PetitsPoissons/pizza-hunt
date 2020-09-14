const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// set up POST comment at /api/comments/:pizzaId
router.route('/:pizzaId').post(addComment);

// set up PUT reply and DELETE comment at /api/comments/:pizzaId/:commentId
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

// set up DELETE reply at /api/comments/:pizzaId/:commentId/:replyId
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;