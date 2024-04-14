import { envs } from './config/envs';
import { Server } from './presentation/server'
import { AppRoutes } from './presentation/routes'


(() => {
    main()
})();


function main() {

    const server = new Server(
        { 
            port: envs.PORT,
            routes: AppRoutes.routes
         }
    )

    server.start()
}
