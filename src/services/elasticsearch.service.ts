
import { ElasticClient } from "../config/elasticsearch.config"
import { IRDocument, IRCreateDocument, IRSearchDocument } from "../interfaces"

/* Create resource service */
export const Create = async (data: IRCreateDocument) => {
    try {

        /* Indexing some data */
        const result = await ElasticClient.index({
            index: data.index,
            document: {
                character: data.document.character,
                quote: data.document.quote
            }
        })

        /* here we are forcing an index refresh, otherwise we will not */
        /* get any result in the consequent search */
        await ElasticClient.indices.refresh({ index: data.index })

        return result
    } catch (error: any) {
        if (error) throw error
    }
}

/* Search resource service */
export const Search = async (data: IRSearchDocument) => {
    try {
        const result = await ElasticClient.search<IRDocument>({
            index: data.index,
            query: {
                match: { quote: data.query }
            }
        })

        return result.hits.hits
    } catch (error: any) {
        if (error) throw error
    }
}