import * as log4js from 'log4js';
import * as env from '../../environment/environment'

export class LoggerUtil {

    logger: any;

    constructor(){
        this.logger = log4js.getLogger();
        this.logger.level = env.LOG_LEVEL;
    }

    public info(logText: any, msgType?:string): void {
        this.logger.info(logText);
    }

    public error(logText: any, msgType?:string): void{
        this.logger.error(logText);
    }

    private getDateFormat(): string {
        var date = new Date();
        var returnStr = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
        return returnStr;
    }
}

// Create the loggerUtil, and export its instance
const loggerUtil = new LoggerUtil();
export default loggerUtil;