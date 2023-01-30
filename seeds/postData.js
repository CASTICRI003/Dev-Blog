const { Post } = require('../models');

const postData = [
    {
        title: 'This is a cool feature!',
        content: 'Passport.js is a really useful feature to test out! "https://www.passportjs.org/"',
        post_date: '2022-10-11 4:00:00',
        user_id: 2,
    },
    {
        title: 'Switch case question.',
        content: 'How do you use switch cases in js?',
        post_date: '2022-12-12 10:12:00',
        user_id: 4,
    },
    {
        title: 'Hashing passwords.',
        content: 'What is the best way to hash passwords?',
        post_date: '2022-04-15 07:30:00',
        user_id: 1,
    },
    {
        title: 'HTML question',
        content: 'When should i use pre tags over p tags?',
        post_date: '2020-08-23 09:23:00',
        user_id: 3,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;