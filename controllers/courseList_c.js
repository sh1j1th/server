let courseList_model = require('../models/courseList_m')

module.exports = {
select_all: async (req, res)=>{// Get all courseLists
    try {
        console.log("For Debug 123")
        //console.log(req)

        //let users = await user_model.find().exec()
        //res.send(users)


        let courseLists = await courseList_model.find().exec()
        console.log(courseLists)
        res.send(courseLists)
    } catch(err) {
        console.log("For Debug")
        console.log(req)
        res.status(500).send(err)
    }
},
records_in_table_form: async (req, res)=>{// Get all courseLists & List in HTML Table
    try {
        let courseLists = await courseList_model.find().exec()
        let html = '<h1>courseList List</h1><table border="1" cellspacing="0" cellpadding="5"><tr><th>SrNo</th><th>_id</th><th>courseList Name</th><th>Description</th><th>image_name</th><th>Cost</th></tr>'
        let serial_no = 1
        courseLists.forEach((record)=>{
            html += `<tr><td>${serial_no}</td><td>${record._id}</td><td>${record.courseList_name}</td><td>${record.description}</td><td>${record.image_name}</td><td>${record.cost}</td></tr>`
            serial_no++
        })
        html += '</table>'
        res.send(html)
    } catch(err) {
        res.status(500).send(err)
    }
},
select1_by_id: async (req, res)=>{// Get a selected courseList
    try {
        let courseList = await courseList_model.findById(req.params.id).exec()
        res.send(courseList)
    } catch(err) {
        res.status(500).send(err)
    }
},
register: async (req, res) => {// Save an user Record
    try {
        console.log(req.body)
        let user = new user_model(req.body)
        let result = await user.save()
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
},
insert: async(req, res)=>{// Save an courseList Record
    try {
        console.log(req.body)
        let courseList   = new courseList_model(req.body)
        let result = await courseList.save()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{// Delete an courseList Record
    try {
        let result = await courseList_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
}
}