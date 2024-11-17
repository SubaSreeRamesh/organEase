const express = require('express')
const dotenv =  require('dotenv');
const colors= require('colors')
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
//dot config
dotenv.config();

//mongodb function
connectDB();
//rest object 
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
// 1 test route
app.use('/api/v1/test',require('./routes/testRoutes'));
app.use('/api/v1/auth',require('./routes/authRoutes'));
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'));
//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT,() => {
    console.log(`node server running in ${process.env.DEV_MODE}  mode on port ${process.env.PORT}`
        .bgBlue.white);
})