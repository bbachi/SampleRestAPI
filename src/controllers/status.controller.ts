import { Request, Response, NextFunction } from 'express';
import LoggerUtil from './../logs/log';
import { StatusHelper } from '../helpers/status.helper';


export class StatusController {

    public getStatus(req: Request, res: Response, next: NextFunction) {
        LoggerUtil.info('StatusController::::::>>>>>getting status');
        let statusHelper = new StatusHelper();
        res.json(statusHelper.getStatus());
    }
    
}