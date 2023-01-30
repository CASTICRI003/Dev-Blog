const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Love using this feature!',
        name: 'Bob',
        comment_date: '2022-11-12 07:05:00',
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: 'Here is some documentation on switch cases: "https://www.w3schools.com/js/js_switch.asp"',
        name: 'Luis',
        comment_date: '2022-12-13 10:12:00',
        post_id: 2,
        user_id: 2,
    },
    {
        comment_text: 'You can use Passport.js to sort out passwords! "https://www.passportjs.org/"',
        name: 'Jimi',
        comment_date: '2022-04-16 07:35:00',
        post_id: 3,
        user_id: 3,
    },
    {
        comment_text: 'Pre tags go with the syntax of how you ordered your text. P tags do not do that.',
        name: 'Samantha',
        comment_date: '2020-08-24 09:25:00',
        post_id: 4,
        user_id: 4,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;