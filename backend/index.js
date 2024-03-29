const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notFound');
connectToMongo();
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));



//Available Routes
app.use('/api/markers',require('./src/routes/markers'));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

//Handling page not found
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Currently Listening at http://localhost:${port}`);
});
