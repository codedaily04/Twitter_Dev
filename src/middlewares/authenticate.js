import passport from 'passport';

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => { // ← add info here
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorised access no token',
                success: false,
                data: null,
                error: info // ← now info is defined
            });
        }
        req.user = user;
        next();
    })(req, res, next);
};