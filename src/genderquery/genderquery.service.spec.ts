import { Test, TestingModule } from '@nestjs/testing';
import { GenderqueryService } from './genderquery.service';

describe('GenderqueryService', () => {
  let service: GenderqueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenderqueryService],
    }).compile();

    service = module.get<GenderqueryService>(GenderqueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
