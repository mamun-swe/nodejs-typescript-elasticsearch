
import { Router } from "express"
import { elasticsearchRouter } from "./elasticsearch.route"

export const router = Router()

router.use("/elasticsearch", elasticsearchRouter)