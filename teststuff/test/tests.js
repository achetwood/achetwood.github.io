var expect = chai.expect;

describe("App Constructor", function() {
	describe("Check", function(){
		it('Should check for equality of 1 and 1.', function() {
			expect(1).to.equal(1);
		});
		
		it('Should create an object with undefined public variables', function() {
			var testCore = new Zegami();
			var testArr = [];
			
			expect(testCore.stage).to.equal(undefined);
			expect(testCore.renderer).to.equal(undefined);
			expect(testCore.numImgX).to.equal(0);
			expect(testCore.numImgY).to.equal(0);		
		});
		
	});
});

describe("Check Functions", function() {
	describe("Check", function(){
		it('Should populate renderer and stage objects.', function() {
			var testCore = new Zegami();
			testCore.attachTo('test-container');
			
			expect(testCore.stage instanceof PIXI.Container).to.equal(true);
			expect(testCore.renderer instanceof PIXI.WebGLRenderer).to.equal(true);
		});
		it('Should set objects numImgX & numImgY objects to the passed in values.', function() {
			var testCore = new Zegami();
			var testNumX = 5;
			var testNumY = 9;
			testCore.size(testNumX, testNumY);
			expect(testCore.numImgX).to.equal(testNumX);
			expect(testCore.numImgY).to.equal(testNumY);
		});
		
		// it('Should load the passed in image and ', function(done) {
			// var testCore = new Zegami();
			// var testNumX = 5;
			// var testNumY = 3;
			// testCore.attachTo('test-container');
			// testCore.size(testNumX, testNumY);
			// testCore.start('../cat.jpg', function(err) {
				// expect(testCore.spriteArr.length).to.equal((testNumX * testNumY));
				// expect(testCore.spriteArr[0] instanceof PIXI.Sprite).to.equal(true);
				
				// done();
			// });
		// });
			
			// expect(testCore.spriteArr.length).to.equal((testNumX * testNumY));
			// expect(testCore.spriteArr[0] instanceof PIXI.Sprite).to.equal(true);
	});
});
