
function add(num1, num2) {
	
	return  num1 + num2 === 10;
}
 test('add()', function(){
 	ok(add(6,4), " should equal to 10");
 	ok(add(7,3), " should equal to 10");
 	ok(add(5,5), " should equal to 10");
 })

function subtract(num1, num2) {
	
	return num1 - num2 === 5;
}
 test('subtract()', function(){
 	ok(subtract(10,5), " should equal to 5");
 	ok(subtract(25,20), " should equal to 5");
 	ok(subtract(100,95), " should equal to 5");
 })

function time(num1, num2) {
	
	return num1 * num2 === 20;
}
 test('time()', function(){
 	ok(time(4,5), " should equal to 20");
 	ok(time(20,1), " should equal to 20");
 	ok(time(2,20), " should equal to 20");
 })
