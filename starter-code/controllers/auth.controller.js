module.exports.signup = ((req, res, next) => {
    let errorMessage = 'Error';
    res.render('auth/signup', {
        errorMessage: errorMessage
    })
})