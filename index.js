import * as http2 from 'http2';
import {CodeValidator} from "./gen/app4_connect.js";
import {connectNodeAdapter} from "@connectrpc/connect-node";

const PORT = process.env.PORT || 3000;

const routes = (router) => router.service(CodeValidator, {
    async validateCode(req) {
        console.log(`Code for validate in app4: ${req.code}`);
        return {
            valid: Math.random() > 0.5,
        }
    }
});

http2.createServer(connectNodeAdapter({
    routes
})).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});