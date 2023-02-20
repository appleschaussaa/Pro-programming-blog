const needAuth = (req, res, next) => {
    if (!req.session.logged.in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = needAuth;