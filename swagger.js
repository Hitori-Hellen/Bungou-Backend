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
  definitions: {
    Parents: {
      father: "Simon Doe",
      mother: "Marie Doe"
  },
  User: {
      name: "Jhon Doe",
      age: 29,
      parents: {
          $ref: '#/definitions/Parents'
      },
      diplomas: [
          {
              school: "XYZ University",
              year: 2020,
              completed: true,
              internship: {
                  hours: 290,
                  location: "XYZ Company"
              }
          }
      ]
  },
  AddUser: {
      $email: "trongsang@gmail.com",
      $password: "trongsang",
      firstName: "Sang",
      lastName: "Trong"
  },
  LoginUser: {
    $email: "trongsang@gmail.com",
    $password: "trongsang"
}
  },
  components: {},
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/packages/user/routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index");
});
