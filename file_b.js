const Singleton = require('./custom_log/logs');
const objectLog = Singleton.getInstance(); 

objectLog.customLog("HELLO-B")