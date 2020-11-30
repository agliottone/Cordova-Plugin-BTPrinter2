var exec = require('cordova/exec');

var BTPrinter2 = {
    status: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "status", []);
    },
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "disconnect", []);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printText", [str]);
    },
    printTextSizeAlign: function (fnSuccess, fnError, str, size, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printTextSizeAlign", [str, size, align]);
    },
    printTitle: function (fnSuccess, fnError, str, size, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printTitle", [str, size, align]);
    },
    printImageUrl: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printImageUrl", [str, align]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printBase64", [str, align]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printPOSCommand", [str]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter2", "printQRCode", [str]);
    }
};

module.exports = BTPrinter2;
