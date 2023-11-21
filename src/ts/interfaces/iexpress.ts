import { Request } from 'express'
import { Session } from 'express-session';
import { JwtPayload } from 'jsonwebtoken';
import { Socket } from 'socket.io';

export interface ExtendedSessionData extends Session {
    // user: User
    user: any
    // dashboard: any
  }

export interface CustomRequest extends Request {
    session: ExtendedSessionData;
    user?: JwtPayload
}

export interface CustomSocket extends Socket {
    session: ExtendedSessionData
}
