import { Module } from '@nestjs/common';
import { GenderqueryService } from './genderquery.service';
import { GenderqueryController } from './genderquery.controller';

@Module({
  controllers: [GenderqueryController],
  providers: [GenderqueryService],
})
export class GenderqueryModule {}
