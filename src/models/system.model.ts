const os = require('os');

export class System {
    
    EOL: any;
    type: string;
    release: string;
    arch: string;
    platform: string;
    constants: string;
    cpus: string;
    endianness: string;
    homedir: string;
    userInfo: string;
    hostname: string;
    networkInterfaces: string;
    tmpdir: string;
    totalmem: string;
    freeman: string;
    loadavg: string;
    uptime: string;

    constructor() {

        this.EOL = os.EOL || null;
        this.type = os.type() || null;
        this.release = os.release || null;
        this.arch = os.arch() || null;
        this.platform = os.platform() || null;
        this.constants = os.constants || null;
        this.cpus = os.cpus() || null;
        this.endianness = os.endianness() || null;
        this.homedir = os.homedir() || null;
        this.userInfo = null;
        this.hostname = os.hostname() || null;
        this.networkInterfaces = os.networkInterfaces() || null;
        this.tmpdir = os.tmpdir() || null;
        this.totalmem = os.totalmem() || null;
        this.freeman = os.freemem() || null;
        this.loadavg = os.loadavg() || null;
        this.uptime = os.uptime() || null;

    }

}