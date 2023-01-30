const Singleton = require('./custom_log/logs');
const objectLog = Singleton.getInstance();

if (process.env['SITE'] == "PRD") {
    objectLog.setShowLogs({ showLogs: false, except_files: ['app.js', 'file_a.js'], pretty_object: false })
} else {
    objectLog.setShowLogs({ showLogs: true })
}


require("./file_a.js");
require("./file_b.js");


objectLog.customLog("MAIN")
objectLog.customLogINFO({
    "A": 1
})

objectLog.customLogERR({
    "B": 1,
    "C": {
        "key": 1,
        "key2": {
            "id": "ids"
        }
    }
})


if (true) {

    objectLog.customLogPASS("TRUE")

}

