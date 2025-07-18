const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require('./routes/useRoute');
const taskRoute = require('./routes/taskRoute');

dotenv.config();
const app = express();
app.use(cors({
    origin: 'https://todo-app-8bve.onrender.com',
    credentials: true
}));
app.use(express.json())

app.use('/users', userRoute);
app.use('/tasks', taskRoute);

mongoose.connect(process.env.DATABASE)
            .then(() => console.log('MongoDB connected...'))
            .catch(() => console.log('Error while connecting to MongoDB'));

            


app.listen(process.env.PORT,()=> console.log(`App is running on port ${process.env.PORT}`));