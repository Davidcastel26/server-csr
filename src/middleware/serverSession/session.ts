import session from 'express-session';
import dotenv from 'dotenv';
import { sessionStore } from './redis';

dotenv.config();

export const sessionMiddleware = session ({
    secret: process.env.COOKIE_SECRET || '',
    name: "sid",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: process.env.ENVIRONMENT === "production" ? true : "auto" ,
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" :"lax",
    }
})