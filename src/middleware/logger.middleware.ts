/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Middleware] Request ${req.method} ${req.originalUrl}`);
    console.log(`[Middleware] Request Body: ${JSON.stringify(req.body)}`);
    next();
  }
}