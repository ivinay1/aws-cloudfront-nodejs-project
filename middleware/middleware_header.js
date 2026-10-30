
const middleware_header = (req, res, next) => {

    if (req.headers['service'] === 'VinayCloudFront') {
        next();
    }
    else {
        return res.status(403).render('NotValidUser');
    }
};

module.exports = middleware_header;
