"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const port = process.env.Port || 3333;
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://LocalHost:' + port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map