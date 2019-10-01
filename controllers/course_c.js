let course_model = require('../models/course_m')

module.exports = {
select_all: async (req, res)=>{// Get all courses
    try {
        console.log("For Debug")
        console.log(req)
        let courses = await course_model.find().exec()
        res.send(courses)
    } catch(err) {
        console.log("For Debug")
        console.log(req)
        res.status(500).send(err)
    }
},
records_in_table_form: async (req, res)=>{// Get all courses & List in HTML Table
    try {
        let courses = await course_model.find().exec()
        let html = '<h1>course List</h1><table border="1" cellspacing="0" cellpadding="5"><tr><th>SrNo</th><th>_id</th><th>course Name</th><th>Description</th><th>image_name</th><th>Cost</th></tr>'
        let serial_no = 1
        courses.forEach((record)=>{
            html += `<tr><td>${serial_no}</td><td>${record._id}</td><td>${record.course_name}</td><td>${record.description}</td><td>${record.image_name}</td><td>${record.cost}</td></tr>`
            serial_no++
        })
        html += '</table>'
        res.send(html)
    } catch(err) {
        res.status(500).send(err)
    }
},
select1_by_id: async (req, res)=>{// Get a selected course
    try {
        let course = await course_model.findById(req.params.id).exec()
        res.send(course)
    } catch(err) {
        res.status(500).send(err)
    }
},
insert: async(req, res)=>{// Save an course Record
    try {
        console.log(req.body)
        let course   = new course_model(req.body)
        let result = await course.save()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{// Delete an course Record
    try {
        let result = await course_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
}
}