import { owlController } from './owls.controller';
import { OwlService } from './owls.service';
import { CreateOwlDto } from './dtos/create-owl.dto';


describe('owlController', () => {
  let owlsController: owlController;
  let owlsService: OwlService;

  beforeEach(() => {
    owlsService = new OwlService();
    owlsController = new owlController(owlsService);
  });

  describe('findAll', () => {
    it('should return an array of owls', async () => {
      const owlBucket = new CreateOwlDto();
      const result = [owlBucket];  
      jest.spyOn(owlsService, 'findAll').mockImplementation(() => result);

      expect(await owlsController.findAll()).toBe(result);
    });
  });
});