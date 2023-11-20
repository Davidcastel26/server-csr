import express, { Application } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || '8448';
export const app: Application = express();
export const server = require("http").createServer(app);

app.use( helmet() );
app.use( cors(corsConfig) );
app.use( express.json() );

app.use( productPaths.pokemon, pokemonsRouter  )
app.use( productPaths.types, typesRouter  )

app.listen( port , () => {
    console.log(`-- RUNING ON PORT ${port} --`)
} )