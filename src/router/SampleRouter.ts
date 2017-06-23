import {Router} from 'express';
import LoggerUtil from './../logs/log';
import { SampleController } from './../controllers/sample.controller';

export class SampleRouter {
    
    router: Router;
    
    constructor() {
        this.router = Router();
        this.init();
    }
    
    init() {
        var sampleController = new SampleController();
        this.router.post('/post/something', sampleController.postTest);
        this.router.get('/get/something', sampleController.getTest);
    }
    
}