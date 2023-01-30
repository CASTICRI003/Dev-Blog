const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_idd',
                    'user_id',
                ],
                include: {
                    model: User,
                    attributes: ['name']
                },
            }],
        });

        const post = postData.get({ plain: true });

        res.render('singlepost', {
            post
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

