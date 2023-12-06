import jwt from "jsonwebtoken";


const JWT_SIGN_SECRET = 'nnnr:hrqnvnrithgpingmNMZRJGP2IXIWUIEILFOZIji23536745836658939964647mfjfhjjieocnccujwji';

export const authVerify = (req, res, next) => {

    try {
        const authToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(authToken,JWT_SIGN_SECRET);
        req.params.id = decoded;
        req.authToken =authToken;
        res.json({token: decoded})
        next();

    } catch (error) {
        res.status(401).send('merci de vous authentifier');

    }


};

