import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/users.js'
import commentRoutes from './routes/users.js'

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => console.log('Connected to DB'))
        .catch(err => {
            console.log(err)
            alert('Something goes wrong')
        })
}

app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)

app.listen(8800,() => {
    connect()
    console.log('Connected to Server')
})