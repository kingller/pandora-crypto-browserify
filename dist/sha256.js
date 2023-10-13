"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browserify_sjcl_1 = __importDefault(require("browserify-sjcl"));
var codecArrayBuffer_1 = require("./core/codecArrayBuffer");
function SHA256(message) {
    var signBody;
    if (ArrayBuffer && message instanceof ArrayBuffer) {
        signBody = codecArrayBuffer_1.toBits(message);
    }
    else {
        signBody = message;
    }
    var out = browserify_sjcl_1.default.hash.sha256.hash(signBody);
    return browserify_sjcl_1.default.codec.hex.fromBits(out);
}
exports.default = SHA256;
