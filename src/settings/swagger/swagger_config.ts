import { Application, Request, Response } from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { swaggerOptions } from './swagger_options'

const swaggerSpec = swaggerJsDoc(swaggerOptions)

export const swaggerDocs = (app: Application, port: string, version: string) => {
  app.use(`/${version}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.get(`/${version}/docs.json`, (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'aplication/json')
    res.send(swaggerSpec)
  })
  console.log(`📓 Version ${version} Docs are available at http://localhost:${port}/${version}/docs`)
}
