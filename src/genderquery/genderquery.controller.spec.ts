import { Test, TestingModule } from '@nestjs/testing';
import { GenderqueryController } from './genderquery.controller';
import { GenderqueryService } from './genderquery.service';

describe('GenderqueryController', () => {
  let controller: GenderqueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenderqueryController],
      providers: [GenderqueryService],
    }).compile();

    controller = module.get<GenderqueryController>(GenderqueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
