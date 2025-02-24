const express = require("express");
const app = express();
const corn = require("cors");
const port = require("./config/server.config");
const dashboardRoute = require("./routes/dash.route")

//middleware
app.use(express.json());
app.use(corn());

//routs
//Register and login routes
app.use("/auth", require("./routes/auth.route"));

//dashboard route
app.use("/dashboard", (req, res, next) => {
    console.log('Dashboard route hit');
    next();  // Continue to the actual handler
}, require("./routes/dash.route"));

app.listen(port.PORT, () => {
    portNumber = port.PORT
    console.log("server is running in :", portNumber)
})