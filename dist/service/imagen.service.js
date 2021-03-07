"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagen = void 0;
var uniqid_1 = __importDefault(require("uniqid"));
var cloudinary = require("cloudinary").v2;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Imagen = /** @class */ (function () {
    function Imagen() {
    }
    Imagen.prototype.subir_foto = function (subir) {
        return __awaiter(this, void 0, void 0, function () {
            var archivo, nombreCortado, extensionArchivo, extensionesValidas, datos, nombreArchivo, path;
            var _this = this;
            return __generator(this, function (_a) {
                archivo = subir.foto;
                nombreCortado = archivo.name.split(".");
                extensionArchivo = nombreCortado.pop().toLowerCase();
                extensionesValidas = ["png", "jpg", "gif", "jpeg"];
                if (extensionesValidas.indexOf(extensionArchivo) < 0) {
                    datos = {
                        ok: false,
                        mensaje: "Extension no válida",
                        errors: {
                            message: "extensiones válidas son " + extensionesValidas.join(", "),
                        },
                    };
                    return [2 /*return*/, datos];
                }
                nombreArchivo = nombreCortado[0] + "-" + uniqid_1.default() + "." + extensionArchivo;
                path = "./dist/uploads/" + nombreArchivo;
                return [2 /*return*/, new Promise(function (resolve, rejects) {
                        archivo.mv(path, function (err, res) { return __awaiter(_this, void 0, void 0, function () {
                            var fot, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3 /*break*/, 1];
                                        res.status(500).send({
                                            err: err,
                                        });
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.subirFotoNube(path, nombreArchivo)];
                                    case 2:
                                        fot = _a.sent();
                                        result = {
                                            id: fot.public_id,
                                            url: fot.secure_url,
                                        };
                                        resolve(result);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    Imagen.prototype.subirFotoNube = function (path, nombreArchivo) {
        return __awaiter(this, void 0, void 0, function () {
            var globalCloudinary, img, pathimg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        globalCloudinary = {
                            cloud_name: "dtkwmbujl",
                            api_key: "231813186676151",
                            api_secret: "yGqlGNs4EchTRnSjbjG_KW-skHo",
                        };
                        cloudinary.config(globalCloudinary);
                        return [4 /*yield*/, cloudinary.uploader.upload(path)];
                    case 1:
                        img = _a.sent();
                        return [4 /*yield*/, path_1.default.resolve(__dirname, "../uploads/" + nombreArchivo)];
                    case 2:
                        pathimg = _a.sent();
                        return [4 /*yield*/, fs_1.default.unlinkSync(pathimg)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, img];
                }
            });
        });
    };
    return Imagen;
}());
exports.Imagen = Imagen;
