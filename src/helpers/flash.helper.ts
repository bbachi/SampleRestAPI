import { FlashService } from '../services';
import LoggerUtil from './../logs/log';
const DataTransform = require("node-json-transform");
import { Flash } from '../models'

export class FlashHelper {

    flashService: FlashService;

    constructor(){
        this.flashService = new FlashService();
    }

    async getFlashList() {
        
        LoggerUtil.info('FlashHelper::::::>>>>>>>getFlashList()');
        let flashMap: any = {};
        try{
            let flashResp = await this.flashService.getFlashList();
            flashMap['flashes'] = [...flashResp.data];
            //const transformedFlashes = this.transform(flashResp);
            //this.outagesMap = { outages: [...transformedFlashes] };

        }catch(err){
            LoggerUtil.error(`${'Unable to get data-->Error:'}${err.response.status || 500} ${err.response.statusText || 'Internal server error'}`);
        }
        return new Flash();
    }


    private transform(flashResp: any) {

    }
}