const {Router} = require('express');
const router = Router();
const helloWorld_controller = require('./controllers/helloWorld_controller');


router.get('/', helloWorld_controller.helloWorld);

module.exports = router;