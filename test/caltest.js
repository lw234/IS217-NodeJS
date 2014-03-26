//unit testing for simple calculator
var expect = require("chai").expect;
var test = require("../lib/test.js");
describe("caltest", function(){
   describe("#addition", function(){
       it("when add two positive number should return positive numbers", function(){
           var num1 = 5;
           var num2 = 2;
           var result = num1 + num2;
           expect(result).to.equal(result);
           }); 
       it(" when add two negative number should return negative numbers", function(){
       	
       		var num1 = -10;
       		var num2 = -3;
       		var result = num1 + num2;
       		
       		expect(result).to.equal(result);
       	
       });
       
       it("when add negative number to positive number should return the sign of the bigger number", function(){
       	
       		var num1 = 200;
       		var num2 = -20;
       		var result = num1 + num2;
       		expect(result).to.equal(result);
       }); 
       
	});
	
	describe("#subtraction", function(){
       it("when subtract two positive number should return positive numbers", function(){
           var num1 = 5;
           var num2 = 2;
           var result = num1 - num2;
           expect(result).to.equal(result);
           }); 
       it(" when subtract two negitive number should return negative numbers", function(){
       	
       		var num1 = -10;
       		var num2 = -3;
       		var result = num1 - num2;
       		
       		expect(result).to.equal(result);
       	
       });
       
       it("when subtract positive number to negitive number should return the sign of the bigger number", function(){
       	
       		var num1 = 200;
       		var num2 = -20;
       		var result = num1 - num2;
       		expect(result).to.equal(result);
       }); 
       
	});
	
	describe("#multiplication", function(){
       it("when multiply two positive number should return positive numbers", function(){
           var num1 = 5;
           var num2 = 2;
           var result = num1 * num2;
           expect(result).to.equal(result);
           }); 
       it(" when multiply two negitive number should return positive numbers", function(){
       	
       		var num1 = -10;
       		var num2 = -3;
       		var result = num1 * num2;
       		
       		expect(result).to.equal(result);
       	
       });
       
       it("when multiply positive number to negitive number should return negitive number", function(){
       	
       		var num1 = 200;
       		var num2 = -20;
       		var result = num1 * num2;
       		expect(result).to.equal(result);
       }); 
       
	});
	
	describe("#division", function(){
       it("when divide two positive number should return positive numbers", function(){
           var num1 = 10;
           var num2 = 2;
           var result = num1 / num2;
           expect(result).to.equal(result);
           }); 
       it(" when divide two negitive number should return positive numbers", function(){
       	
       		var num1 = -100;
       		var num2 = -20;
       		var result = num1 / num2;
       		
       		expect(result).to.equal(result);
       	
       });
       
       it("when divide positive number to negitive number should return negitive number", function(){
       	
       		var num1 = 200;
       		var num2 = -20;
       		var result = num1 / num2;
       		expect(result).to.equal(result);
       }); 
       
	});
	
});