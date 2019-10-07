const express     = require('express')
const bodyParser  = require('body-parser')
const mentor_router = express.Router()

mentor_router.use(bodyParser.urlencoded({extended: true}))
//mentor_router.use(bodyParser.json())
// mentor_router.get('/', (req, res)=> res.send(`Got '/mentor GET' Request`))// Keep for testing purpose

let mentor_controller = require('../controllers/mentor_c')

mentor_router.get("/",       mentor_controller.select_all)// Get all mentors.
mentor_router.get("/table",  mentor_controller.records_in_table_form)// Get all mentors & List in HTML Table.
mentor_router.get("/:id",    mentor_controller.select1_by_id)// Get a selected mentor.
mentor_router.post("/",      mentor_controller.register)// Save an mentor Record / Save Register Form data.
mentor_router.post("/check", mentor_controller.authenticate)// Check valid mentor or not.
mentor_router.delete("/:id", mentor_controller.delete1)// Delete an mentor Record
mentor_router.put("/:id",    mentor_controller.update1)// Delete an mentor Record
mentor_router.put("/block/:id",    mentor_controller.block1)// update an mentor Record
mentor_router.put("/unblock/:id",    mentor_controller.unblock1)// update an mentor Record

module.exports = mentor_router