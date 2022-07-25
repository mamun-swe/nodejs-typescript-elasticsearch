import { cpus } from "os"
import process from "process"
import cluster from "cluster"
import { app } from "./src/app"

const numCPUs = cpus().length
const port: any = process.env.APP_PORT || 5000

if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`)

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
}

/* Start app to specific PORT */
else {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`)
    })
}

// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/typescript.html
// https://developer.okta.com/blog/2022/04/27/ultimate-guide-elasticsearch-nodejs