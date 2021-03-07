"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoria_controller_1 = __importDefault(require("../controller/categoria.controller"));
var CategoriaRouter = /** @class */ (function () {
    function CategoriaRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    CategoriaRouter.prototype.routes = function () {
        this.router.get("/list", categoria_controller_1.default.list);
        this.router.post("/registrar", categoria_controller_1.default.registrar);
    };
    return CategoriaRouter;
}());
var postRoutes = new CategoriaRouter();
exports.default = postRoutes.router;
