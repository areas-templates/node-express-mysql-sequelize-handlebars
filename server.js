// Dependencies.
const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")

// App.
const app = express()
const PORT = process.env.PORT || 3030

// Models.
const sequelize = require("./config/connection")

// Views.
const hbs = handlebars.create()
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

// Controllers.
const routes = require("./controllers")

// Middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// Set up the routes.
app.use(routes)

// Start the app.
sequelize.sync({ force: false })
	.then( () => app.listen( PORT, () => console.log(`Listening at http://localhost:${PORT}! 🚀`) ) )
