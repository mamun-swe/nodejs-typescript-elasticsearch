import express, { Express, NextFunction, Response, Request } from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import dotenv from "dotenv"
import nocache from "nocache"
import bodyParser from "body-parser"
import compression from "compression"
dotenv.config()
import { router } from "./routes"
import { errorHandeller } from "./middlewares/error-handeller.middleware"

export const app: Express = express()
app.use(cors())
app.use(helmet())
app.use(nocache())
app.use(morgan('dev'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Base route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Wow!😯 are you here 🙃🙃 application running!!! 😜😜😜")
})

/* Register API routes */
app.use("/api/v1", router)

/* Register error handeller */
app.use(errorHandeller)