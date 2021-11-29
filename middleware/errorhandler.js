const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(501).json({ msg: 'Something went wrong, plzz try again' })
}

module.exports = errorHandlerMiddleware;