import { Controller } from '@nestjs/common';
import { GenderqueryService } from './genderquery.service';

@Controller('genderquery')
export class GenderqueryController {
  constructor(private readonly genderqueryService: GenderqueryService) {}
}
