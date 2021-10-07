const dbConnection = require("../connection/db");
const router = require("express").Router();

// import bcrypt for password encrypt
const bcrypt = require("bcrypt");

// set routes and render login page
router.get("/login", function (req, res) {
    res.render("auth/login", { title: "Login Page", isLogin: req.session.isLogin })
});

// set routes and render register page
router.get("/register", function (req, res) {
    res.render("auth/register", { title: "Register Page", isLogin: req.session.isLogin })
});


// login handler
// .post means you catch data from html that use post method
router.post("/login", function (req, res) {
    const { email, password } = req.body;
    const query = "SELECT id, email, password, name FROM tb_user WHERE email= ?";

    // verif if input is blank
    if (email == "" || password == "") {
        req.session.message = {
            type: "danger",
            message: "Input must be filled",
        };
        res.redirect("/login");
        return;
    }

    dbConnection.getConnection((err, conn) => {
        // if error appear show error
        if (err) throw err;

        conn.query(query, [email], (err, results) => {
            if (err) throw err;

            // init bcrypt to match with password
            const isPassMatch = bcrypt.compareSync(password, results[0].password);
            if (!isPassMatch) {
                req.session.message = {
                    type: "danger",
                    message: "email or password is incorrect",
                };
                return res.redirect("/login");
            } else {
                req.session.message = {
                    type: "success",
                    message: "Login success",
                };

                req.session.isLogin = true;
                req.session.user = {
                    id: results[0].id,
                    email: results[0].email,
                    name: results[0].name,
                };

                // redirect to dashboard
                return res.redirect("/inventory");
            }
        });

        // distinguish db connection then turn it back to connection limit 
        conn.release();
    });
});


// register handler


router.post("/register", function (req, res) {
    const { email, password, name } = req.body;

    const query = "INSERT INTO tb_user(name, email, password) VALUES (?,?,?)";

     // verif if input is blank
    if (name == "" || email == "" || password == "") {
        req.session.message = {
            type: "danger",
            message: "Input must be filled",
        };
        res.redirect("/register");
        return;
    }

     // init bcrypt to encrypt password 10 times spinning
    const hashedPassword = bcrypt.hashSync(password, 10);

    dbConnection.getConnection((err, conn) => {
        if (err) throw err;

        // execute query
        conn.query(query, [name, email, hashedPassword], (err, results) => {
            if (err) throw err;

            req.session.message = {
                type: "success",
                message: "Register Success",
            };
            res.redirect("/register");
        });

        // distinguish db connection then turn it back to connection limit 
        conn.release();
    });
});

// logout handler
router.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;