const express     = require('express')
const bodyParser  = require('body-parser')
const courseList_router = express.Router()

courseList_router.use(bodyParser.urlencoded({extended: true}))
//courseList_router.use(bodyParser.json())
// courseList_router.get('/', (req, res)=> res.send(`Got '/courseList GET' Request`))// Keep for testing purpose

let courseList_controller = require('../controllers/courseList_c')

courseList_router.get("/",       courseList_controller.select_all)// Get all courseLists.
courseList_router.get("/table",  courseList_controller.records_in_table_form)// Get all courseLists & List in HTML Table.
courseList_router.get("/:id",    courseList_controller.select1_by_id)// Get a selected courseList.
courseList_router.post("/",      courseList_controller.insert)// Save an courseList Record.
courseList_router.delete("/:id", courseList_controller.delete1)// Delete an courseList Record
courseList_router.post("/",      courseList_controller.register)// Save an courseList Record / Save Register Form data.

module.exports = courseList_router