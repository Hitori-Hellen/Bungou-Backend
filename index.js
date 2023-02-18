const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const swaggerDocs = require('./src/utils/swagger');
const { default: helmet } = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.listen(port, () => {
    swaggerDocs(app, port);
});