
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.route.js';
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        app.listen(PORT, () => console.log("app started on PORT", PORT));
    }
).catch(
    (error) => {
        console.log("error at connecting to mongodb", error.message)
    }
)


