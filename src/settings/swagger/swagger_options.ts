import { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'REST API BLOG - Documentation version 1',
    version: '1.0.0',
    description: 'Esta es una API REST creada con la intención de consumirla con un servidor de apollo. Se hace con el motivo de crear el FRONT de la aplicación con la suficiente dependencia y autonomia, que con los cambio minimos, fucionaria con la API REST o el APOLLO SERVER con GRAPHQL.',
    contact: {
      name: 'Neri Heredia',
      url: 'https://www.linkedin.com/in/neriheredia/',
      email: 'developer.heredia@gmail.com'
    }
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'Bearer'
      }
    },
    schemas: {
      login: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      register: {
        type: 'object',
        required: ['email', 'firstName', 'lastName', 'password'],
        properties: {
          email: {
            type: 'string'
          },
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      }
    }
  }
};

export const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/routes/v1/auth.ts']
};
