const Customer = require('../models/customer')
const customersController = {}

customersController.list = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
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

customersController.create = (req, res) => {
    const body = req.body
    console.log(body)
    const customer= new Customer(body)
    customer.userId = req.userId 
    customer.save()
        .then((customer) => {
            console.log(customer.name)
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}
customersController.myCustomer = (req, res) => {
    Customer.find({ userId: req.userId })
        .then((customer) => {
            res.json(customer)
        })
}

module.exports = customersController