import { SpidersController } from './spider.controller';
import { SpidersService } from './spider.service';
import { CreateSpiderDto } from './dtos/create-spider.dto'



describe('SpidersController', () => {
  let spidersController: SpidersController;
  let spidersService: SpidersService;

  beforeEach(() => {
    spidersService = new SpidersService();
    spidersController = new SpidersController(spidersService);
  });

  describe('findAll', () => {
    it('should return an array of spiders', async () => {
      const spiderBucket = new CreateSpiderDto();
      const result = [spiderBucket];  
      jest.spyOn(spidersService, 'findAll').mockImplementation(() => result);

      expect(await spidersController.findAll()).toBe(result);
    });
  });
});