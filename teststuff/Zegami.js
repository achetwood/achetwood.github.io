function Zegami() {
	
	this.stage;
	this.renderer;
	this.numImgX = 3;
	this.numImgY = 3;
	this.spriteArr = [];
	
	var _stage;
	var _renderer;
	var _numImgX = 3;
	var _numImgY = 3;
	var _spriteArr = [];
	// function size(numX, numY)
	// {
		// numImgX = numX;
		// numImgY = numY;
	// }
	
	// function zoom()
	// {
		
	// }
	this.updateZoom = function(val) {
		_stage.scale.x = val;
		_stage.scale.y = val;
	}
	
	this.attachTo = function(container) {
		// Initialise PIXI stage and renderer.
		// Attach renderer to the intended element.
		var canvas = document.getElementById(container);
		
		_renderer = PIXI.autoDetectRenderer(800, 800);
		canvas.appendChild(_renderer.view);
		
		_stage = new PIXI.Container();
		
		_stage.x = 60;
		_stage.y = 60;
		
		var zoomSlider = document.createElement('input');
		zoomSlider.id = "zoomControl";
		zoomSlider.type = 'range';
		zoomSlider.min = 5;
		zoomSlider.max = 300;
		zoomSlider.value = 1;
		zoomSlider.step = 1;
		zoomSlider.addEventListener("change", Zegami.updateZoom(this.value));
		document.body.appendChild(zoomSlider);
		
		// this.start = function(img) {
			// var numImgX = _numImgX;
			// var numImgY = _numImgY;
			// var renderer = _renderer;
			// var stage = _stage;
			// var spriteArr = _spriteArr;
			
			// var image = new Image();
			
			// image.onload = function() {
				// var baseTexture = new PIXI.BaseTexture(image)
				// var texture = new PIXI.Texture(baseTexture);
				
				// // function populateImages()
				// // {
					// // Set variable ready for loop when adding images.
					// // var x = 0;
					// // var y = 0;
					// for ( y = 0; y < numImgY; y++ )
					// {
						// for ( x = 0; x < numImgX; x++)
						// {
							// var imgSprite = new PIXI.Sprite(texture);
							// imgSprite.x = (texture.width * x) + 50;
							// imgSprite.y = (texture.height * y) + 50;
							
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
			// };
			
			// image.src = img;
		// }

	}
	
	this.size = function(numX, numY) {
		_numImgX = numX;
		_numImgY = numY;
	}
	
	this.start = function(img) {
			var numImgX = _numImgX;
			var numImgY = _numImgY;
			var renderer = _renderer;
			var stage = _stage;
			var spriteArr = _spriteArr;
			
			var image = new Image();
			
			image.onload = function() {
				var baseTexture = new PIXI.BaseTexture(image)
				var texture = new PIXI.Texture(baseTexture);
				
				// function populateImages()
				// {
					// Set variable ready for loop when adding images.
					// var x = 0;
					// var y = 0;
					for ( y = 0; y < numImgY; y++ )
					{
						for ( x = 0; x < numImgX; x++)
						{
							var imgSprite = new PIXI.Sprite(texture);
							imgSprite.x = (texture.width + 20) * x;
							imgSprite.y = (texture.height + 20) * y;
							
							imgSprite.interactive = true;
							
							// Add images to array and bind mouse click/touch event to sprites.
							spriteArr.push(imgSprite);
							spriteArr[spriteArr.length - 1].on('mousedown', onClick);
							spriteArr[spriteArr.length - 1].on('touchstart', onClick);
							
							function onClick()
							{
								this.scale.x += 0.3;
								this.scale.y += 0.3;
							}
							
							stage.addChild(imgSprite);
						}
					}
					
					animate();
					// animate();
				// }
			};
			
			image.src = img;
			// animate();
		}
	// this.size = function(numX, numY) {
		// _numImgX = numX;
		// _numImgY = numY;
	// }
	
	// this.start = function(img) {
		// var numImgX = _numImgX;
		// var numImgY = _numImgY;
		// var spriteArr = _spriteArr;
		// // var renderer = this.renderer;
		// var stage = _stage;
		
		// var image = new Image();
		
		// image.onload = function() {
			// var baseTexture = new PIXI.BaseTexture(image)
			// var texture = new PIXI.Texture(baseTexture);
			
			// // function populateImages()
			// // {
				// // Set variable ready for loop when adding images.
				// // var x = 0;
				// // var y = 0;
				// for ( y = 0; y < numImgY; y++ )
				// {
					// for ( x = 0; x < numImgX; x++)
					// {
						// var imgSprite = new PIXI.Sprite(texture);
						// imgSprite.x = (texture.width * x) + 50;
						// imgSprite.y = (texture.height * y) + 50;
						
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
				
			// // }
		// };
		
		// image.src = img;
		// animate();
	// }
	
	function animate() {
		requestAnimationFrame(animate);
		
		_renderer.render(_stage);
	}
}

// Zegami.prototype.constructor = Zegami;
// Zegami.prototype.attachTo = function(container) {
	// // Initialise PIXI stage and renderer.
	// // Attach renderer to the intended element.
	// var canvas = document.getElementById(container);
	
	// this.renderer = PIXI.autoDetectRenderer(800, 800,{backgroundColor : 0xFFFFFF});
	// canvas.appendChild(this.renderer.view);
	
	// this.stage = new PIXI.Container();
	
	// this.stage.x = 60;
	// this.stage.y = 60;
	
	// var zoomSlider = document.createElement('input');
	// zoomSlider.id = "zoomControl";
	// zoomSlider.type = 'range';
	// zoomSlider.min = 5;
	// zoomSlider.max = 300;
	// zoomSlider.value = 1;
	// zoomSlider.step = 1;
	// document.body.appendChild(zoomSlider);
	
	// // this.size = function(numX, numY) {
		// // this.numImgX = numX;
		// // this.numImgY = numY;
	// // }
	
	// // this.start = function(img) {
		// // var numImgX = this.numImgX;
		// // var numImgY = this.numImgY;
		// // var renderer = this.renderer;
		// // var stage = this.stage;
		
		// // var image = new Image();
		
		// // image.onload = function() {
			// // var baseTexture = new PIXI.BaseTexture(image)
			// // var texture = new PIXI.Texture(baseTexture);
			
			// // // function populateImages()
			// // // {
				// // // Set variable ready for loop when adding images.
				// // // var x = 0;
				// // // var y = 0;
				// // for ( y = 0; y < numImgY; y++ )
				// // {
					// // for ( x = 0; x < numImgX; x++)
					// // {
						// // var imgSprite = new PIXI.Sprite(texture);
						// // imgSprite.x = (texture.width * x) + 50;
						// // imgSprite.y = (texture.height * y) + 50;
						
						// // imgSprite.interactive = true;
						
						// // // Add images to array and bind mouse click/touch event to sprites.
						// // Zegami.spriteArr.push(imgSprite);
						// // Zegami.spriteArr[Zegami.spriteArr.length - 1].on('mousedown', onClick);
						// // Zegami.spriteArr[Zegami.spriteArr.length - 1].on('touchstart', onClick);
						
						// // function onClick()
						// // {
							// // this.scale.x += 0.3;
							// // this.scale.y += 0.3;
						// // }
						
						// // Zegami.stage.addChild(imgSprite);
					// // }
				// // }
				
				// // animate();
			// // // }
		// // };
		
		// // image.src = img;
		
		// // function animate() {
			// // requestAnimationFrame(animate);
			
			// // renderer.render(stage);
		// // }
	// // }
	// // var selectedImg = document.createElement();
// }
// Zegami.prototype.size = function(numX, numY) {
	// this.numImgX = numX;
	// this.numImgY = numY;
// }
// Zegami.prototype.start = function(img) {
	// // Initialise	
	// var numImgX = this.numImgX;
	// var numImgY = this.numImgY;
	// var renderer = this.renderer;
	// var stage = this.stage;
	
	// var image = new Image();
	
	// image.onload = function() {
		// var baseTexture = new PIXI.BaseTexture(image)
		// var texture = new PIXI.Texture(baseTexture);
		
		// // function populateImages()
		// // {
			// // Set variable ready for loop when adding images.
			// // var x = 0;
			// // var y = 0;
			// for ( y = 0; y < numImgY; y++ )
			// {
				// for ( x = 0; x < numImgX; x++)
				// {
					// var imgSprite = new PIXI.Sprite(texture);
					// imgSprite.x = (texture.width * x) + 50;
					// imgSprite.y = (texture.height * y) + 50;
					
					// imgSprite.interactive = true;
					
					// // Add images to array and bind mouse click/touch event to sprites.
					// Zegami.spriteArr.push(imgSprite);
					// Zegami.spriteArr[Zegami.spriteArr.length - 1].on('mousedown', onClick);
					// Zegami.spriteArr[Zegami.spriteArr.length - 1].on('touchstart', onClick);
					
					// function onClick()
					// {
						// this.scale.x += 0.3;
						// this.scale.y += 0.3;
					// }
					
					// Zegami.stage.addChild(imgSprite);
				// }
			// }
			
			// animate();
		// // }
	// };
	
	// image.src = img;
	
	// function animate() {
		// requestAnimationFrame(animate);
		
		// renderer.render(stage);
	// }
// }

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

