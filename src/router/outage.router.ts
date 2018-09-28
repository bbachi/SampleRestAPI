import { Router } from 'express';
import { StatusController, SystemController } from '../controllers'

export class OutagesRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        const statusController = new StatusController();
        const systemController = new SystemController();

        this.router.get('/status', statusController.getStatus);
        this.router.get('/system', systemController.getSystem);
    }

}
