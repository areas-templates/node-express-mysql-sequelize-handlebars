// Database.
const sequelize = require("../config/connection")

// Import the models.
const { User } = require("../models")

// Import the seed data.
const userData = require("./userData.json")

// Seed the database.
async function seedDatabase() {
	await sequelize.sync({ force: true })
	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	})
}

seedDatabase()
