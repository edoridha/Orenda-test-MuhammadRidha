const verifyToken = require("../helper/jwt");

module.exports = async (req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token) {
            throw {
                name: "NoToken"
              };
        }

        const payload = verifyToken(access_token)
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
}