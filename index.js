// init requirements
const http = require("http");
const express = require("express"); 
const path = require("path");
const hbs = require("hbs");
const { title } = require("process");
const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventory");

// import hbs helper
const loopingNumber = require("./helper/loopingnumber")

// init express-session to manage session
const session = require("express-session");
const flash = require("express-flash");

// init db connection
const dbConnection = require("./connection/db");

// run express framework
const app =  express();

// use express as static module
app.use(express.static('express'));

// use request handler to parsing html form
app.use(express.urlencoded({ extended: false }));

// set public path
app.use("/static", express.static(path.join(__dirname, "public")));

// set views folder
app.set("views", path.join(__dirname, "views"));

// registering another view part
hbs.registerPartials(path.join(__dirname, "views/partial"));

//set template/view engine
app.set("view engine", "hbs");


// use express-session to set user session
app.use(
    session({
        // set max session to 3 hours
        cookie: {
            // HH * mm * ss * ms
            maxAge: 3 * 60 * 60 * 1000,
            secure: false,
            httpOnly: true
        },
        // save session to server memory
        store: new session.MemoryStore(),
        saveUninitialized: true,
        resave: false,
        secret: "secretValue",
    })
);

// use flash for sending message
app.use(flash());

// setup flash message
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

// set and mount routes
app.use("/", authRoutes);
app.use("/", inventoryRoutes);

// set new route using http method to render index page
app.get("/", function(request, respond){
    respond.render("index", {title: "Inventory App"});
});

// server configuration
const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log('server running on port: ', port)
});