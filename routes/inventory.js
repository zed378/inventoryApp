const router = require("express").Router();

// import db connection
const dbConnection = require("../connection/db");
// const uploadFile = require("../helper/uploadFile");
// const pathFile = "http://localhost:3000/uploads/";


// set routes and render inventory views
router.get("/inventory", function (req, res) {
    res.render("inventory/views/index", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

// router.get("/products", function (req, res) {
//     const query = "SELECT * FROM tb_products ORDER BY created_at DESC";

//     dbConnection.getConnection((err, conn) => {
//         if (err) throw err;

//         conn.query(query, (err, results) => {
//             if (err) throw err;

//             let products = [];

//             for (let result of results) {
//                 products.push({
//                     ...result,
//                     image: "http://localhost:5000/uploads/" + result.image,
//                 });
//             }

//             res.render("index", { title: "Inventory App", isLogin: req.session.isLogin, products });
//         });

//         conn.release();
//     });

//     if (req.session.isLogin !== true) {
//         res.redirect("/")
//     }
// });

router.get("/products", function (req, res) {
    res.render("inventory/views/products", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/purchases", function (req, res) {
    res.render("inventory/views/purchases", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/rent", function (req, res) {
    res.render("inventory/views/rent", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/supplier", function (req, res) {
    res.render("inventory/views/supplier", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

// set routes and render inventory adding form
router.get("/addproducts", function (req, res) {
    res.render("inventory/addpage/products", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/addpurchases", function (req, res) {
    res.render("inventory/addpage/purchases", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/addrent", function (req, res) {
    res.render("inventory/addpage/rent", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/addsupplier", function (req, res) {
    res.render("inventory/addpage/supplier", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

// set routes and render inventory editing form
router.get("/editproducts", function (req, res) {
    res.render("inventory/editpage/products", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/editpurchases", function (req, res) {
    res.render("inventory/editpage/purchases", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/editrent", function (req, res) {
    res.render("inventory/editpage/rent", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

router.get("/editsupplier", function (req, res) {
    res.render("inventory/editpage/supplier", { title: "Inventory App", isLogin: req.session.isLogin });

    if (req.session.isLogin !== true) {
        res.redirect("/")
    }
})

// Delete table records
// router.get("/deleteproducts/:id", function (req, res) {
//     const { id } = req.params;

//     const query = "DELETE FROM tb_products WHERE id = ?";

//     dbConnection.getConnection((err, conn) => {
//         if (err) throw err;

//         conn.query(query, [id], (err, results) => {
//             if (err) {
//                 req.session.message = {
//                     type: "danger",
//                     message: err.message,
//                 };
//                 res.redirect("/products");
//             }

//             req.session.message = {
//                 type: "success",
//                 message: "Delete product success",
//             };
//             res.redirect("/products");
//         });

//         conn.release();
//     });
// });

module.exports = router;