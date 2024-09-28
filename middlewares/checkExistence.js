const { validationResult } = require('express-validator');


const checkExistence = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json(errors);
    }

    next();
}



module.exports = {
    checkExistence
}