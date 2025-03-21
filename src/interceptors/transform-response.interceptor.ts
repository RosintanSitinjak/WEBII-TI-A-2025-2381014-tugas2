/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Response<T> {
    data: T;
    statusCode: number;
    message: string;
    timestamp: string;
  }
  
  @Injectable()
  export class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse();
      const statusCode = response.statusCode;
  
      return next.handle().pipe(
        map(data => ({
          data,
          statusCode,
          message: 'Berhasil',
          timestamp: new Date().toISOString(),
        })),
      );
    }
  }
  