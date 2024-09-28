const { Router } = require('express');
const { check } = require('express-validator');
const { getArticleById, updateArticleById, getArticles } = require('../controllers/articles');
const { articleExists } = require('../helpers/db-validators');
const { checkExistence } = require('../middlewares/checkExistence');

const router = Router();

/**
 * {{url}}/api/v1/articles
 */

// Obtain all articles - public
router.get('/', getArticles);

// Obtain article by id - public
router.get('/:id', [
    check('id', 'Given id is not valid').isAlphanumeric(),
    check('id').custom(articleExists),
    checkExistence
], getArticleById);

// Update article by id - public
router.put('/:id', [
    check('id', 'Given id is not valid').isAlphanumeric(),
    check('id').custom(articleExists),
    checkExistence
], updateArticleById);

module.exports = router;