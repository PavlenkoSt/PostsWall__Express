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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Router_js_1 = __importDefault(require("./Router.js"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const PORT = 8888;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.uoaiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express_1.default();
app.use(cors_1.default());
app.options('*', cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static('static'));
app.use(express_fileupload_1.default());
app.use('/api', Router_js_1.default);
app.get('/', (request, responce) => {
    responce.status(200).json('Сервер работает!');
});
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
            // tslint:disable-next-line:no-console
            app.listen(PORT, () => console.log(`Server is open - http://localhost:${PORT}/`));
        }
        catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
        }
    });
}
;
startApp();
//# sourceMappingURL=index.js.map