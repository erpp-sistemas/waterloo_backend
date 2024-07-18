import { envs } from './config/envs';
import { Server } from './presentation/server'
import { AppRoutes } from './presentation/routes'
import { createServer } from 'http';
import { WssService } from './presentation/services/wss.service';
import { StorageAdapter } from './config/storage.adapter';


(() => {
    main()
})();


function main() {

    const server = new Server()

    const httpServer = createServer(server.app);
    WssService.initWss( {server: httpServer} )
    StorageAdapter.initStorage({ bucket_name: 'erppay' });


    server.setRoutes( AppRoutes.routes );

    httpServer.listen( envs.PORT , () => console.log(`Server running on poort: ${envs.PORT}`))
    
}
