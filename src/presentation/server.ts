import express, { Router } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

interface Options {
    port: number
}

export class Server {

    public readonly app = express()

    constructor() {
        this.configure()
    }

    private configure() {
        // * Middlewares
        this.app.use(cookieParser())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors({
            origin: 'http://localhost:5173',
            credentials: true,
        }))
    }

    public setRoutes(router: Router) {
        this.app.use(router)
    }


}