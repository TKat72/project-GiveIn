const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const postRouter = require('./posts')
const registrationRouter = require('./registration')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/posts', postRouter)
router.use('/registration', registrationRouter)


// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));


// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user.username);
//     }
// );

module.exports = router;
