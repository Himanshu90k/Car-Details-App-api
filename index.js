import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes/index.js'

const app = express();
const port = process.env.PORT;
const allowedUrl = process.env.FRONTEND_URL
const mongoDBConnectionString = process.env.DBURL

//middleware
app.use(cors({
    origin: allowedUrl,
    optionsSuccessStatus: 200
}))
app.use(express.json({limit: '300b'}))

//Routes
app.use('/api', routes)

// Connect to MongoDB
mongoose.connect(mongoDBConnectionString, {dbName: 'carsData'})
    .then((conn) => {
        const {host, port} = conn.connection
        console.log(`The mongoDB host: ${host} - is connected on port: ${port}`)
    })
    .catch((err) => {
        console.log("monogDB connection error: ", err)
    })


app.listen(port, () => console.log(`The server is running on port: ${port}`));