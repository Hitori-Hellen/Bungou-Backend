const express = require("express");
const path = require('path')
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const swaggerDocs = require("./swagger");
const { default: helmet } = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerFile = require("./swagger-output.json");
const initRoutes = require("./src/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
initRoutes(app);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));



app.listen(port, () => {
  console.log(
    "Server is running!\nAPI documentation: http://localhost:3000/docs"
  ); 
});
app.use(express.static('dist'))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})