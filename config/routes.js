const express=require('express')
const router=express.Router()

const usersController=require('../app/controllers/usersControllers')
const {authenticateUser}=require('../app/middlewares/authentication')
const customersController=require('../app/controllers/customersControllers')
const driversController=require('../app/controllers/driversController')

router.post('/api/users/register',usersController.register)
router.post('/api/users/login',usersController.login)
//private route
router.get('/api/users/account', authenticateUser ,usersController.account)

router.post('/api/customers',authenticateUser, customersController.create)
router.get('/api/list', authenticateUser, customersController.myCustomer)
router.get('/api/customer/list', authenticateUser,customersController.list)

router.post('/api/driver',authenticateUser, driversController.create)
router.get('/api/myDriver', authenticateUser, driversController.myDriver)
router.get('/api/driver/list', authenticateUser,driversController.list)
router.delete('/api/driver/:id',authenticateUser, driversController.destroy)


module.exports=router