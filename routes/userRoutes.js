const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.get);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

// Export the router
module.exports = router;
