import { SwaggerDefinition, Options } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Secure API",
    version: "1.0.0",
    description: "A secure RESTful API documented using OpenAPI Specification",
  },
  servers: [
    {
      url: "http://localhost:4000/api",
      description: "Development server",
    },
  ],
};

const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"], // Adjust based on your folder structure
};

export default swaggerOptions;