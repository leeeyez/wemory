const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// authorization
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin"];

// community
db.community = require("./community.model");

// post
db.diary = require("./diary.model");

module.exports = db;