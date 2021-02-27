"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var producto_controller_1 = __importDefault(require("../controller/producto.controller"));
var ProductoRouter = /** @class */ (function () {
    function ProductoRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ProductoRouter.prototype.routes = function () {
        // this.router.post(
        //   "/registrar",
        //   md_auth.ensureAuth,
        //   productoController.registrar
        // );
        this.router.post("/list", producto_controller_1.default.list);
    };
    return ProductoRouter;
}());
var postRoutes = new ProductoRouter();
exports.default = postRoutes.router;
