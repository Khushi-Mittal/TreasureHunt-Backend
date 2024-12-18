// const express=require('express');
// const app=express();
// const PORT=8000;
// const dotenv=require('dotenv');
// const cors=require('cors');
// dotenv.config();
// app.get("/",(req,res)=>{
//     res.send("hello World");
// })
// const mongoDB=require("./db");
// mongoDB(process.env.BACKEND_URL);

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type,Accept"
//     );
//     next();
// })
// app.use(express.json());
// app.use(cors());
// app.use('/api',require('./routes/createUser'));

// app.listen(PORT,()=>{
//     console.log("Server started");
// })

const express = require('express');
const app = express();
const PORT = 8000;
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Configure CORS
const corsOptions = {
    origin: 'https://treasurehunt-seven.vercel.app', // Allow requests only from this origin
    methods: 'GET,POST,PUT,DELETE',  // Define allowed HTTP methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',  // Define allowed headers
};

app.use(cors(corsOptions));  // Use CORS middleware with the options

// Database connection (make sure your DB URL is set correctly in .env)
const mongoDB = require("./db");
mongoDB(process.env.BACKEND_URL);

// Basic route to check if server is working
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Use the routes for creating a user
app.use('/api', require('./routes/createUser'));

// Start the server
app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});
