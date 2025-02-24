const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    const jwtToken = req.header("token");

    if (!jwtToken) {
        console.log("Not Authorize")
        return res.status(403).json({ msg: "authorization denied" });
    }

    try {
        const verify = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = verify.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};