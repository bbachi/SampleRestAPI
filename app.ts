import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { SampleRouter } from './src/router/SampleRouter';

class App {
    
    public express: express.Application;
    public sampleRouter: SampleRouter = new SampleRouter();
    
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.sampleRouter.init();
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
        let sampleAPIRouter = express.Router();
        // placeholder route handler
        sampleAPIRouter.get('/', (req, res, next) => {
            res.sendFile(path.join(__dirname + '/index.html'));
        });
        this.express.use('/', sampleAPIRouter);
        this.express.use('/test', this.sampleRouter.router);
    }
}

export default new App().express;