/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    console.log(`[${new Date().toISOString()}] ${method} ${url} - Request`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `[${new Date().toISOString()}] ${method} ${url} - Response (${Date.now() - now}ms)`,
          ),
        ),
      );
  }
}
