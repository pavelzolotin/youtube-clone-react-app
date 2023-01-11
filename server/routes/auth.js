import express from 'express'
import {signIn, signUp} from '../controllers/auth.js'

const router = express.Router()

//CREATE A USER
router.post('/signup', signUp)

//SIGN IN
router.post('/signin', signIn)

export default router