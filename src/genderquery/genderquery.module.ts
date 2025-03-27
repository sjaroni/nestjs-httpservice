import { Module } from '@nestjs/common';
import { GenderqueryService } from './genderquery.service';
import { GenderqueryController } from './genderquery.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GenderqueryController],
  providers: [GenderqueryService],
})
export class GenderqueryModule {}
