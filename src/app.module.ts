import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenderqueryModule } from './genderquery/genderquery.module';

@Module({
  imports: [GenderqueryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
