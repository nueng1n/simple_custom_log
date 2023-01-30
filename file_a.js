const Singleton = require('./custom_log/logs');
const objectLog = Singleton.getInstance(); 

objectLog.customLog("HELLO-A")

objectLog.customLogPASS("COMPLETE")

