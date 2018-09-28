import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { OutagesRouter, SwaggerRouter } from './src/router';

class App {

    public express: express.Application;
    public outagesRouter: OutagesRouter = new OutagesRouter();
    public swaggerRouter: SwaggerRouter = new SwaggerRouter();

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.outagesRouter.init();
        //this.swaggerRouter.init();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
        * working so far. This function will change when we start to add more
        * API endpoints */
        let outagesAPIRouter = express.Router();
        // placeholder route handler
        outagesAPIRouter.get('/', (req, res, next) => {
            res.sendFile(path.join(__dirname + '/index.html'));
        });
        //this.express.use('/api/docs', this.swaggerRouter.router);
        this.express.use('/api', this.outagesRouter.router);
        this.express.use('/', outagesAPIRouter);

    }
}

export default new App().express;
