function Zegami() {
	
	this.stage;
	this.renderer;
	this.numImgX = 3;
	this.numImgY = 3;
	this.spriteArr = [];
	
	// function size(numX, numY)
	// {
		// numImgX = numX;
		// numImgY = numY;
	// }
	
	// function zoom()
	// {
		
	// }
	
	// function start(img)
	// {
		// // Initialise
		// var texture = PIXI.Texture.fromImage(img);
		
		// // Generate array for sprite to go into.
		// var spriteArr = [];
		
		// // Set variable ready for loop when adding images.
		// var x = 0;
		// var y = 0;
		// for ( y; y < numImgY; y++ )
		// {
			// for ( x; x < numImgX; x++)
			// {
				// var imgSprite = PIXI.Sprite(texture);
				// imgSprite.x = (imgSprite.width * x) + 10;
				// imgSprite.y = (imgSprite.height * y) + 10;
				
				// imgSprite.interactive = true;
				
				// // Add images to array and bind mouse click/touch event to sprites.
				// spriteArr.push(imgSprite);
				// spriteArr[spriteArr.length - 1].on('mousedown', onClick);
				// spriteArr[spriteArr.length - 1].on('touchstart', onClick);
				
				// function onClick()
				// {
					// this.scale.x += 0.3;
					// this.scale.y += 0.3;
				// }
				
				// stage.addChild(imgSprite);
			// }
		// }
		
	// }

	function animate() {
		requestAnimationFrame(animate);
		
		this.renderer.render(this.stage);
	}
}

// Zegami.prototype.constructor = Zegami;
Zegami.prototype.attachTo = function(container) {
	// Initialise PIXI stage and renderer.
	// Attach renderer to the intended element.
	var canvas = document.getElementById(container);
	
	this.renderer = PIXI.autoDetectRenderer(800, 800);
	canvas.appendChild(this.renderer.view);
	
	this.stage = new PIXI.Container();
	
	this.stage.x = 60;
	this.stage.y = 60;
	
	var zoomSlider = document.createElement('input');
	zoomSlider.id = "zoomControl";
	zoomSlider.type = 'range';
	zoomSlider.min = 5;
	zoomSlider.max = 300;
	zoomSlider.value = 1;
	zoomSlider.step = 1;
	document.body.appendChild(zoomSlider);
	
	// var selectedImg = document.createElement();
}
Zegami.prototype.size = function(numX, numY) {
	this.numImgX = numX;
	this.numImgY = numY;
}
Zegami.prototype.start = function(img) {
	// Initialise
	var image = new Image();
	image.src = img;
	var texture = PIXI.Texture.fromImage(image);
	
	// // Generate array for sprite to go into.
	// var spriteArr = [];
	// var image = new Image();
	// image.src = img;
	// var images = {};
	// var loadedImages = 0;
	// var numImages = 0;
	// // get num of sources
	// for(var src0 in img) {
		// numImages++;
	// }
	// for(var src in img) {
		// images[src] = new Image();
		// images[src].onload = function() {
			// if(++loadedImages >= numImages) {
				// callback(images);
			// }
		// };
		// images[src].src = img[src];
	// }
	
	// Set variable ready for loop when adding images.
	var x = 0;
	var y = 0;
	for ( y; y < this.numImgY; y++ )
	{
		for ( x; x < this.numImgX; x++)
		{
			var imgSprite = PIXI.Sprite(texture);
			imgSprite.x = (texture.width * x) + 10;
			imgSprite.y = (texture.height * y) + 10;
			
			imgSprite.interactive = true;
			
			// Add images to array and bind mouse click/touch event to sprites.
			this.spriteArr.push(imgSprite);
			this.spriteArr[this.spriteArr.length - 1].on('mousedown', onClick);
			this.spriteArr[this.spriteArr.length - 1].on('touchstart', onClick);
			
			function onClick()
			{
				this.scale.x += 0.3;
				this.scale.y += 0.3;
			}
			
			this.stage.addChild(imgSprite);
		}
	}
	
	// animate();
}

//Function to pre-load images from Konva docs
function loadImages(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	// get num of sources
	for(var src0 in sources) {
		numImages++;
	}
	for(var src in sources) {
		images[src] = new Image();
		images[src].onload = function() {
			if(++loadedImages >= numImages) {
				callback(images);
			}
		};
		images[src].src = sources[src];
	}
}

var Zegami = new Zegami();

