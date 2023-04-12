const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "",
    title: "",
    description: "",
  },
  host: "",
  basePath: "",
  schemes: [],
  consumes: [],
  produces: [],
  tags: [
    {
      name: "",
      description: "",
    },
  ],
  securityDefinitions: {},
  definitions: {},
  components: {},
};

const outputFile = "../swagger-output.json";
const endpointsFiles = [];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index");
});
