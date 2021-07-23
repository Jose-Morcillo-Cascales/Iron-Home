module.exports = {
    checkLoggedUser: (req, res, next) => {
        req.session.currentUser ? next() : res.status(401).json({ code: 401, message: 'Please, log-in' })
    }
}