"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBits = void 0;
var browserify_sjcl_1 = __importDefault(require("browserify-sjcl"));
function toBits(buffer) {
    var out = [], len, inView, tmp;
    if (buffer.byteLength === 0) {
        return [];
    }
    inView = new DataView(buffer);
    len = inView.byteLength - (inView.byteLength % 4);
    for (var i = 0; i < len; i += 4) {
        out.push(inView.getUint32(i));
    }
    if (inView.byteLength % 4 != 0) {
        tmp = new DataView(new ArrayBuffer(4));
        for (var i = 0, l = inView.byteLength % 4; i < l; i++) {
            //we want the data to the right, because partial slices off the starting bits
            tmp.setUint8(i + 4 - l, inView.getUint8(len + i)); // big-endian,
        }
        out.push(browserify_sjcl_1.default.bitArray.partial((inView.byteLength % 4) * 8, tmp.getUint32(0)));
    }
    return out;
}
exports.toBits = toBits;
