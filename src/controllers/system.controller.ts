import { Request, Response, NextFunction } from 'express';
import LoggerUtil from './../logs/log';
import { SystemHelper } from '../helpers/system.helper';


export class SystemController {

    public getSystem(req: Request, res: Response, next: NextFunction) {
        LoggerUtil.info('SystemController::::::>>>>>getting system');
        let systemHelper = new SystemHelper();
        res.json(systemHelper.getSystem());
    }
    
}