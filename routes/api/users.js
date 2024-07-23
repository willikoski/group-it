const express = require('express');
const router = express.Router();
const { createUser, loginUser, resetPassword, updatePasswordWithToken, indexAll, authenticate, showUser } = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn'); 

// POST /api/users/signup
router.get('/', indexAll, authenticate);
// GET /api/users/:id

router.post('/', createUser, authenticate);

// GET /api/users/:id
router.get('/:id', showUser, authenticate);

// POST /api/users/login
router.post('/login', loginUser, authenticate);

router.get('/check-token', ensureLoggedIn, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});

// POST /api/users/reset-password
router.post('/reset-password', resetPassword);

// POST /api/users/reset-password/:token
router.post('/reset-password/:token', updatePasswordWithToken);

module.exports = router;
