
import { isEmpty } from "../helpers"
import {
    IRCreateDocument,
    IRCreateErrorDocument,
    IRSearchDocument,
    IRSearchErrorDocument
} from "../interfaces"

/* Store validator */
export const Store = async (data: IRCreateDocument) => {
    let errors: IRCreateErrorDocument = <IRCreateErrorDocument>{}

    if (!data.index || isEmpty(data.index)) errors.index = "Index is required."
    if (!data.document) {
        errors.document = {
            character: "Character is required.",
            quote: "Quote is required."
        }
    }

    if (data.document) {
        if (!data.document.character || isEmpty(data.document.character)) {
            errors.document = { character: "Character is required." }
        }

        if (!data.document.quote || isEmpty(data.document.quote)) {
            errors.document = { quote: "Quote is required." }
        }
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

/* Search validator */
export const Search = async (data: IRSearchDocument) => {
    let errors: IRSearchErrorDocument = <IRSearchErrorDocument>{}

    if (!data.index || isEmpty(data.index)) errors.index = "Index is required."
    if (!data.query || isEmpty(data.query)) errors.query = "Query is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}