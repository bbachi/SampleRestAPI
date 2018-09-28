import { System } from '../models'
import LoggerUtil from './../logs/log';
const os = require('os');

export class SystemHelper {

    public getSystem(): System {

        let stystem = new System();
        stystem.freeman = os.freemem() || null;
        stystem.loadavg = os.loadavg() || null;
        stystem.uptime = os.uptime() || null;
        LoggerUtil.info('StatusHelper::::::>>>>>>>returning status');
        return stystem;
    }
}