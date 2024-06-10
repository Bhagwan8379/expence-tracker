const router = require("express").Router()

const accountController = require("./../controllers/account.controller")

router
    // .get("/", userController.getAllUsers)
    .post('/credit', accountController.credit)
    .post('/debit', accountController.debit)


module.exports = router