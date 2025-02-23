const router = require("express").Router();
const pool = require("../db");
const bcrypt = require('bcrypt');
const jwtpass = require('../config/auth.config');
const jwtGenerator = require("../utils/jwtGenerator");

router.post("/register", async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE useremail = $1", [email]);

        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const bcryptPassword = await bcrypt.hash(password, salt);


        const newUser = await pool.query(
            "INSERT INTO users (username, useremail, phoneNumber, userPassword) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, phoneNumber, bcryptPassword]
        );

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);
        console.log("New user added:", newUser.rows[0]);
        return res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
        // return res.json({ jwtToken });



    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
