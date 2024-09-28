const { Articles } = require("../models/articles");


/**
 * Articles
 */
const articleExists = async(id) => {
    const articleExists = await Articles.findByPk(id);
    if (!articleExists) {
        throw new Error(`No article was found with id: ${ id }`);
    }
}


module.exports = {
    articleExists
}