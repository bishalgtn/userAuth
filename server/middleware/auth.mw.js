const jwt = require("jsonwebtoken")
require("dotenv").config()


module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if (!jwtToken) {
            return res.status(403).json("not authorization");
        }
        const playload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = playload.user;

    } catch (error) {
        console.error(error.message)
    }
};