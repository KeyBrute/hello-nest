import { RacoonController } from './racoons.controller';
import { RacoonsService } from './racoons.service';
import { CreateRacoonDto } from './dtos/create-racoon.dto';


describe('RacoonsController', () => {
  let racoonsController: RacoonController;
  let racoonsService: RacoonsService;

  beforeEach(() => {
    racoonsService = new RacoonsService();
    racoonsController = new RacoonController(racoonsService);
  });

  describe('findAll', () => {
    it('should return an array of racoons', async () => {
      const racoonBucket = new CreateRacoonDto();
      const result = [racoonBucket];  
      jest.spyOn(racoonsService, 'findAll').mockImplementation(() => result);

      expect(await racoonsController.findAll()).toBe(result);
    });
  });
});