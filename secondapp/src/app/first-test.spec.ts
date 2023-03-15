describe('First Test',() =>{
  let testVariable:any;

beforeEach(()=>{
  testVariable  ={};

});

it('should return true if it is true',()=>{
  //arrange
  testVariable.a = false;
  //act
  testVariable.a = true;
  //assert
  expect(testVariable.a).toBe(true);
})

});
//User Service get user method should return the correct given userInfo.

// describe('User Service',()=>{
//   describe('getUser() method',()=>{

//     it('should return the correct given user',()=>{

//     })
//   });
// });

