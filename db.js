const dontenv = require("dotenv")
dontenv.config()
const pg = require("pg")
const pool = new pg.Pool()
module.exports = pool