const crypto = require('crypto');
const path = require("path");

let instance = null;


const colors = {
    "yellow": '\x1b[33m%s\x1b[0m',
    "red": "\x1b[31m%s\x1b[0m",
    "green": "\x1b[32m%s\x1b[0m"
}

let isObject = function (a) {
    return (!!a) && (a.constructor === Object);
};

class Log {
    constructor() {
        if (!instance) {
            instance = this;
        }


        this.showLogs = true;
        this.except_files = []
        this.pretty_object = true
        this.id = crypto.randomBytes(20).toString('hex')
        return instance;
    }

    customLog(message, is_color = false, color = null, file_name_ = null) {


        //FILE_NAME
        const err = new Error();
        let file_name = (file_name_ == null) ? path.basename(err.stack.split("\n")[2]).split(":")[0] : file_name_;

        if (this.showLogs || this.except_files.includes(file_name)) {

            if (this.pretty_object) {


                if (isObject(message)) {

                    if (is_color) {
                        console.log(color, JSON.stringify(message, null, 4));

                    } else {
                        console.log(JSON.stringify(message, null, 4));

                    }
                } else {

                    if (is_color) {
                        console.log(color, message);
                    } else {
                        console.log(message);
                    }
                }
            } else {

                if (is_color) {
                    console.log(color, message);

                } else {
                    console.log(message);
                }
            }



        }
    }


    customLogINFO(message) {

        //FILE_NAME
        const err = new Error();
        let file_name = path.basename(err.stack.split("\n")[2]).split(":")[0];

        this.customLog(message, true, colors['yellow'], file_name)

    }

    customLogERR(message) {

        //FILE_NAME
        const err = new Error();
        let file_name = path.basename(err.stack.split("\n")[2]).split(":")[0];

        this.customLog(message, true, colors['red'], file_name)

    }

    customLogPASS(message) {

        //FILE_NAME
        const err = new Error();
        let file_name = path.basename(err.stack.split("\n")[2]).split(":")[0];

        this.customLog(message, true, colors['green'], file_name)

    }

    setShowLogs(options = {}) {
        this.showLogs = options['showLogs'] == undefined ? true : options['showLogs'];
        this.except_files = options['except_files'] == undefined ? [] : options['except_files']
        this.pretty_object = options['pretty_object'] == undefined ? true : options['pretty_object']

    }
}


class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    } static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Log()
        }
        return Singleton.instance;
    }
}
module.exports = Singleton;

