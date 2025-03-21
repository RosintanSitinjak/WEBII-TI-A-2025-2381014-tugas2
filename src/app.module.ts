/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [MahasiswaModule],
  controllers: [],
  providers: [],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'mahasiswa', method: RequestMethod.ALL });
  }
}
