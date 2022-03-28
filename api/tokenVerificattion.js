const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token, 'tokensss');
    if (!token) {
        res.status(401).json({ msg: 'Access Denied' });
    }
    if (token) {
        try {
            const verified = jwt.verify(token, 'seceret');
            console.log(verified, 'verified');
            next();
        } catch (err) {
            console.log(err, 'error');
            return res.status(401).json({ msg: 'Invalid token' });
        }
    }
};

module.exports = verifyToken;
