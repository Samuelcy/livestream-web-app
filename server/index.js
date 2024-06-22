import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './src/routes/authRoutes.js'
import channelsRoutes from './src/routes/channelRoutes.js'
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello your server is here')
})

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelsRoutes);

const server = http.createServer(app)

// If sucessfully connect to DB, connect to server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('Database connection failed. Sever not started');
        console.log(err);
    });

