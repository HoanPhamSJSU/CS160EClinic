const express = require('express');
const { loadDoctorController } = require('../controllers/doctorController');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');



router.get('/doctor', awaitHandlerFactory(doctorController.loadDoctorController)); // localhost:3000/api/users
router.get('/doctor/:id', awaitHandlerFactory(doctorController.loadDoctorControllerById)); // localhost:3000/api/users/id/1
// router.get('/username/:username', auth(), awaitHandlerFactory(userController.getUserByuserName)); // localhost:3000/api/v1/users/usersname/julia
// router.get('/whoami', auth(), awaitHandlerFactory(userController.getCurrentUser)); // localhost:3000/api/v1/users/whoami
// router.post('/', createUserSchema, awaitHandlerFactory(userController.createUser)); // localhost:3000/api/v1/users
// router.patch('/id/:id', auth(Role.Admin), updateUserSchema, awaitHandlerFactory(userController.updateUser)); // localhost:3000/api/v1/users/id/1 , using patch for partial update
// router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(userController.deleteUser)); // localhost:3000/api/v1/users/id/1


// router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin)); // localhost:3000/api/v1/users/login

module.exports = router;
