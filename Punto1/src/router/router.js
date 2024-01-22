const express = require('express')
const controlle=require('../controller/controller')
const router= express.Router()
router.get('/',controlle.ConsumirApiGitHub)
module.exports=router