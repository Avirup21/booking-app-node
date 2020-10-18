const Driver = require('../models/driver')
const driversController = {}

driversController.list = (req, res) => {
    Driver.find()
        .then((drivers) => {
            res.json(drivers)
        })
        .catch((err) => {
            res.json(err)
        })
}

// customersController.show = (req, res) => {
//     console.log(req)
//     const id = req.params.id
//     console.log('id',id)
//     Customer.findById(id)
//         .then((customer) => {
//             if (tenant) {
//                 res.json(tenant)
//             } else {
//                 res.json({})
//             }
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

driversController.create = (req, res) => {
    const body = req.body
    console.log(body)
    const drivers= new Driver(body)
    drivers.userId = req.userId 
    drivers.save()
        .then((drivers) => {
            console.log(drivers.name)
            res.json(drivers)
        })
        .catch((err) => {
            res.json(err)
        })
}
driversController.myDriver = (req, res) => {
    Driver.find({ userId: req.userId })
        .then((drivers) => {
            res.json(drivers)
        })
}

driversController.destroy = (req, res) => {
    const id = req.params.id
    Driver.findByIdAndDelete({_id: id, userId: req.userId })
        .then((faculty) => {
            if (faculty) {
                res.json(faculty)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
    } 
     

module.exports = driversController