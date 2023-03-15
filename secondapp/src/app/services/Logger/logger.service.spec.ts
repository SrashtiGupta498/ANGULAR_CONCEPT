import { LoggerService } from "./logger.service";

describe('LoggerService',()=>{
  let service:LoggerService;
beforeEach(()=>{
service = new LoggerService();
});
  it('should not have any message at starting',()=>{
    //arrange
    //const service = new LoggerService();
    //act
    let count = service.message.length;
    //assert
    expect(count).toBe(0);
    
  });
  it('should add the messaged when log is called',()=>{

    //const service = new LoggerService();
    service.log('message');
    expect(service.message.length).toBe(1);
  });
  it('should clear all the message when clear is called',()=>{
    //const service = new LoggerService();
    service.log('message');
    service.clear();
    expect(service.message.length).toBe(0);
  })
})
