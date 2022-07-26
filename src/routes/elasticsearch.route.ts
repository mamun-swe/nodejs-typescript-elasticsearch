
import { Router } from "express"
import * as ElasticsearchController from "../controllers/elasticsearch.controller"

export const elasticsearchRouter = Router()

elasticsearchRouter.post("/", ElasticsearchController.Store)
elasticsearchRouter.post("/search", ElasticsearchController.Search)