const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll(
            {
                where: {
                    user_id: req.session.user_id
                },
                attributes: [
                    'id',
                    'title',
                    'content',
                    'post_date',
                ],
                include: [{
                    model: Comment,
                    attributes: [
                        'id',
                        'comment_text',
                        'post_id',
                        'user_id',
                    ],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
            {
                model: User,
                attributes: ['name']
            },
        ]
            }
        );
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});