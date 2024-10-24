import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT;
const allowedUrl = process.env.FRONTEND_URL

//middleware
app.use(cors({
    origin: allowedUrl,
    optionsSuccessStatus: 200
}))

app.get('/', (req, res) => {
    res.status(200).json({"message": "The get request"})
})

app.listen(port, () => console.log(`The server is running on port: ${port}`));