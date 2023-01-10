// Dependencies.
const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")

// Routes.
const routes = require("./controllers")

// Database.
const sequelize = require("./config/connection")

// App.
const app = express()
const PORT = process.env.PORT || 3030

// Set up the routes.
app.use(routes)

// Set up the middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// Set up Handlebars.
const hbs = handlebars.create()
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

// Start the app.
sequelize.sync({ force: false })
.then( () => app.listen( PORT, () => console.log(`Listening at http://localhost:${PORT}! 🚀`) ) )
