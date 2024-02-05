"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/que', 'DataStructuresController.introduction');
Route_1.default.any('', async () => {
    return { error: 'Page Not Found' };
});
//# sourceMappingURL=routes.js.map