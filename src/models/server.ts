import express, { Application } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { corsConfig, swaggerOptions } from '../configs';
import { sessionMiddleware } from '../middleware/serverSession/session';
import { ProductPaths, UserPaths } from '../ts/enums/emainPaths';
import { productRoute, userRoute } from '../routes';

dotenv.config();

const port = process.env.PORT || '8042';
export const app: Application = express();
export const server = require("http").createServer(app);

app.use( helmet() );
app.use( cors(corsConfig) );
app.use( express.json() );
app.use( sessionMiddleware );

app.use( UserPaths.users, userRoute );
app.use( ProductPaths.products, productRoute )

const spacs = swaggerJsdoc( swaggerOptions );

app.use('/api-docs', 
    swaggerUi.serve,
    swaggerUi.setup(spacs) 
)

app.listen( port , () => {
    console.log(`-- RUNING ON PORT ${port} --`)
} )