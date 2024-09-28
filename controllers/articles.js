const { response, request } = require("express");
const { Articles } = require("../models/articles");

const getArticles = async(req = request, res = response) => {

    const articles = await Articles.findAll();

    return res.json({ articles });
}

const getArticleById = async(req = request, res = response) => {

    const { id } = req.params;
    const article = await Articles.findByPk(id);

    return res.json(article);
}

const updateArticleById = async(req = request, res = response) => {

    const { id } = req.params;
    const { description, model } = req.body;

    try {

        const article = await Articles.findByPk(id);

        await article.update({ description, model });

        return res.json(article);


    } catch (error) {

        console.log(error);
        return res.status(500).json({
            msg: 'Something went wrong, try later'
        })
    }

}

module.exports = {
    getArticles,
    getArticleById,
    updateArticleById
}