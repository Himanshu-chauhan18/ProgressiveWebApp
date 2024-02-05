"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStructuresController {
    async introduction({ request, response }) {
        let d = request;
        console.log(d);
        let data = [{ question: 'what is Dsa' }, { question: 'what is Algorithm' }];
        return response.json({
            'data': data,
            'error': '',
            status: true
        });
    }
}
exports.default = DataStructuresController;
//# sourceMappingURL=DataStructuresController.js.map