const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const swaggerDocs = require("./swagger");
const { default: helmet } = require("helmet");
const swaggerUi = require("swagger-ui-express");
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
