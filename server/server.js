const express = require("express");
const app = express();
const corn = require("cors");
const port = require("./config/server.config");

//middleware
app.use(express.json());
app.use(corn());

//routs


//Register and login routes
app.use("/auth", require("./routes/auth.route"));


app.listen(port.PORT, () => {
    portNumber = port.PORT
    console.log("server is running in :", portNumber)
})