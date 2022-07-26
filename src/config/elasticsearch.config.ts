
import { Client } from "@elastic/elasticsearch"

const id: any = process.env.ELASTIC_CLOUD_ID
const username: any = process.env.ELASTIC_USERNAME
const password: any = process.env.ELASTIC_PASSWORD

export const ElasticClient = new Client({
    cloud: { id: id },
    auth: {
        username,
        password
    }
})