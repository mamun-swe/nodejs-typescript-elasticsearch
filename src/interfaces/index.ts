
export interface IRDocument {
    character: string,
    quote: string
}

export interface IRCreateDocument {
    index: string,
    document: IRDocument
}

export interface IRCreateErrorDocument {
    index: string,
    document: {
        character?: string,
        quote?: string
    }
}

export interface IRSearchDocument {
    index: string,
    query: string
}

export interface IRSearchErrorDocument {
    index?: string,
    query?: string
}

