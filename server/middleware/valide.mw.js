module.exports = (req, res, next) => {
    const { name, email, phoneNumber, password } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/register") {
        console.log(!email.length);
        if (![name, email, phoneNumber, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    } else if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }

    next();
};


// summary(dataset)
// ggplot(dataset, aes(x=credit_score)) +
//   geom_bar(fill="skyblue") +
//   labs(title="Distribution of Credit Scores", x="Credit Score", y="Count") +
//   theme_minimal()



// ggplot(dataset, aes(x=Credit_Score)) +
//   geom_bar(fill="skyblue") +
//   labs(title="Distribution of Credit Scores", x="Credit Score", y="Count") +
//   theme_minimal()

