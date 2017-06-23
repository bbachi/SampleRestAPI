import {Request, Response, NextFunction} from 'express';
import LoggerUtil from './../logs/log';


export class SampleController {
    
    public postTest(req: Request, res: Response, next: NextFunction) {
        
        LoggerUtil.info('Request body::::'+JSON.stringify(req.body));
        
       res.json({postedData:req.body});
    }
    
    public getTest(req: Request, res: Response, next: NextFunction) {

        res.json({data:"this is sample data"});

    }
    
}