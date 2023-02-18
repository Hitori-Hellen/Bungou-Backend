const { Express } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    schema: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: {
            bearerAuth: [],
        },
    },
    apis: ['./src/routes/routes*.js'],
}

const  openapiSpecification = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

    app.get('doc.json', (req, res) => {
        res.setHeader('Content-type', 'application/json');
        res.send(openapiSpecification);
    })

    console.log(`Doc available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;