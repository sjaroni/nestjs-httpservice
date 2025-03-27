import { Controller, Get, Param } from '@nestjs/common';
import { GenderqueryService } from './genderquery.service';

@Controller('genderquery')
export class GenderqueryController {  
  constructor(private readonly genderqueryService: GenderqueryService) {}

  @Get(':firstName')
  getGender(@Param('firstName') firstName: string) {
    return this.genderqueryService.getGender(firstName);
  }

}
