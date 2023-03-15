import { CalculatorService } from "./calculator.service";
import {LoggerService} from '../Logger/logger.service';
describe('CalculatorService',()=>{
let mockloggerService:any;
let calculator: CalculatorService;
  // beforeEach(()=>{
  //   console.log("calling before each");
  //   let mockloggerService = jasmine.createSpyObj('loggerService',['log']);
  //   calculator = new CalculatorService(mockloggerService);
  // });

  it('should add two numbers',()=>{
    let mockloggerService = jasmine.createSpyObj('loggerService',['log']);
    //let loggerService = new LoggerService();
    //spyOn(loggerService,'log');
    const calculator = new CalculatorService(mockloggerService);
    console.log('calling add ')
    let result =calculator.add(4,5);
    expect(result).toBe(9);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers',()=>{
    let mockloggerService = jasmine.createSpyObj('loggerService',['log']);
    const calculator = new CalculatorService(mockloggerService);
    console.log('calling subtract');
    let result =calculator.subtract(4,4);
    expect(result).toBe(0);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1);
  });
})
