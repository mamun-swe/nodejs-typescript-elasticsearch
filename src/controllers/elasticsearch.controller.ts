import { NextFunction, Request, Response } from "express"
import { validator } from "../validators"
import * as ElasticSearchService from "../services/elasticsearch.service"

/* Store resources */
export const Store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { index, document } = req.body

        /* Validate input data */
        const validate = await validator.elasticSearch.Store(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        /* Create indexing */
        const result = await ElasticSearchService.Create({
            index,
            document: {
                character: document.character,
                quote: document.quote
            }
        })

        res.status(201).json({
            status: true,
            data: result
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Search resources */
export const Search = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { index, query } = req.body

        /* Validate input data */
        const validate = await validator.elasticSearch.Search(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        /* Execute search service */
        const result = await ElasticSearchService.Search({
            index,
            query
        })

        res.status(201).json({
            status: true,
            data: result
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}