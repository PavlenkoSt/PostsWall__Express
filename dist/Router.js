"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_js_1 = __importDefault(require("./controllers/PostController.js"));
// @ts-ignore
const router = new express_1.default();
router.get('/posts/:id', PostController_js_1.default.getOne);
router.get('/posts', PostController_js_1.default.getAll);
router.post('/posts', PostController_js_1.default.create);
router.put('/posts', PostController_js_1.default.update);
router.delete('/posts/:id', PostController_js_1.default.delete);
exports.default = router;
//# sourceMappingURL=Router.js.map