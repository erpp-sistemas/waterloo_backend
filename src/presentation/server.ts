import express, { Router } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

interface Options {
    port: number,
    routes: Router
}

export class Server {

    private app = express()
    private readonly port: number;
    private readonly routes: Router

    constructor( options: Options ) {
        const { port, routes } = options
        this.port = port;
        this.routes = routes;
    }

    async start() {

        // * Middlewares
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: true }) )
        this.app.use(cors({
            origin: 'http://localhost:5173',
            credentials: true,
        }))

        // * Routes
        this.app.use(this.routes)

        // * Public Folder
        //this.app.use( express.static('public'))

        this.app.listen(this.port, () => console.log(`server listen on port ${this.port}`))

    }

}