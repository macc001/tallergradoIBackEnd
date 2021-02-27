"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
var jwt = __importStar(require("jwt-simple"));
var dayjs = require("dayjs"); // por que no esta en typeScript solo esta en js
var global_config_1 = __importDefault(require("../config/global.config"));
var Jwt = /** @class */ (function () {
    function Jwt() {
        this.secre = global_config_1.default.secret;
    }
    Jwt.prototype.crearToken = function (user) {
        var payload = {
            // id_user: user[0]["id_usuario"],
            id_usuario: user.id_usuario,
            usuar: user.usuar,
            foto: user.foto,
            email: user.email,
            iat: dayjs().unix(),
            exp: dayjs()
                .add(1, "hour")
                .unix()
        };
        return jwt.encode(payload, global_config_1.default.secret);
    };
    return Jwt;
}());
exports.Jwt = Jwt;
