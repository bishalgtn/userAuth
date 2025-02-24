const router = require("express").Router();
const authorize = require("../middleware/auth.mw");
const pool = require("../db");

router.get("/", authorize, async (req, res) => {
    console.log("error")
    try {
        const user = await pool.query(
            "SELECT username FROM users WHERE user_id = $1",
            [req.user.id]
        );


        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;