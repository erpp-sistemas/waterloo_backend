import { Router } from 'express'
import { AuthRoutes } from './auth/routes'
import { MenuRoutes } from './menu/routes'
import { DashboardResume } from './dashboard-resume/routes'
import { RegisterRoutes } from './register/routes';
import { OficinaEnlaceRoutes } from './oficina-enlace/routes';
import { NotificationRoutes } from './notification/routes';
import { AtenderaOficinaEnlaceRoutes } from './atendera-oficina.enlace/routes';
import { ErppayRoutes } from './erppay/routes';
import { CampanasRoutes } from './campana/routes';
import { ProcesosRoutes } from './proceso/routes';
import { ZonaRoutes } from './zona/routes';
import { ReporteDatosRoutes } from './reporte-datos/routes';
import { ServiceMapRoutes } from './service-map/service-map.routes';
import { LayerRoutes } from './layer/routes';
import { MobileRoutes } from '../mobile/routes';
import { ReporteAsistenciaRoutes } from './reporte-asistencia/routes';
import { TemplateWhatsappRoutes } from './template-whatsapp/routes';
import { WhatsappRoutes } from '../whatsapp/routes';

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        router.use('/api/auth', AuthRoutes.routes)
        router.use('/api/menu', MenuRoutes.routes)
        router.use('/api/dashboard', DashboardResume.routes)
        router.use('/api/register', RegisterRoutes.routes)
        router.use('/api/oficina-enlace', OficinaEnlaceRoutes.routes)
        router.use('/api/notification', NotificationRoutes.routes)
        router.use('/api/atendera-oficina', AtenderaOficinaEnlaceRoutes.routes)
        router.use('/api/campanas', CampanasRoutes.routes)
        router.use('/api/procesos', ProcesosRoutes.routes)
        router.use('/api/zonas', ZonaRoutes.routes)
        router.use('/api/reportes', ReporteDatosRoutes.routes)
        router.use('/api/services-map', ServiceMapRoutes.routes)
        router.use('/api/layers', LayerRoutes.routes)
        router.use('/api/asistencia', ReporteAsistenciaRoutes.routes)
        router.use('/api/templates', TemplateWhatsappRoutes.routes)

        router.use('/api/whatsapp', WhatsappRoutes.routes)
        router.use('/api/mobile', MobileRoutes.routes)

        router.use('/api/erppay', ErppayRoutes.routes)

        return router;

    }

}
