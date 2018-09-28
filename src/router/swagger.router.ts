import { Router } from 'express';
const swaggerUi = require('swagger-ui-express');
import * as swaggerConsts from '../swagger/swagger';

export class SwaggerRouter {
    
    router: Router;
    
    constructor() {
        this.router = Router();
    }
    
    init() {
        this.router.get('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConsts.SWAGGER_DOCS, false, null));
    }
    
}