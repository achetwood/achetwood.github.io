

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
	this.updateZoom = function(slider) {
		var val = parseFloat(slider.value);
		_stage.scale.x = val;
		_stage.scale.y = val;
	}
	
	this.attachTo = function(container) {
		// Initialise PIXI stage and renderer.
		// Attach renderer to the intended element.
		var canvas = document.getElementById(container);
		var wWidth = window.innerWidth;
		var wHeight = window.innerHeight; 
		_renderer = PIXI.autoDetectRenderer(wWidth, wHeight, {backgroundColor : 0xFFFFFF});
		canvas.appendChild(_renderer.view);
		
		_stage = new PIXI.Container();
		
		_stage.x = 10;
		_stage.y = 10;
		console.log(_stage.scale.x);
		
		var containerDiv = document.createElement('div');
		
		var zoomSlider = document.createElement('input');
		zoomSlider.id = "zoomControl";
		zoomSlider.type = 'range';
		zoomSlider.min = 0.1;
		zoomSlider.max = 2;
		zoomSlider.value = 1;
		zoomSlider.step = 0.1;
		zoomSlider.addEventListener('change', function(){
			var val = parseFloat(this.value);
			_stage.scale.x = val;
			_stage.scale.y = val;}
		);
		containerDiv.appendChild(zoomSlider);
		
		var selectedSpan = document.createElement('span');
		selectedSpan.id = "picSelected";
		selectedSpan.innerHTML = "Selected: ";
		
		// var selectedBox = document.createElement('input');
		// selectedBox.id = "picSelected";
		// selectedBox.type = 'text';
		// selectedBox.readonly = true;
		
		// selectedDiv.appendChild(selectedBox);
		containerDiv.appendChild(selectedSpan);
		canvas.appendChild(containerDiv);
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
		
		// Create function scope copies of the private vars.
		var numImgX = _numImgX;
		var numImgY = _numImgY;
		var renderer = _renderer;
		var stage = _stage;
		var spriteArr = _spriteArr;
		
		var image = new Image();
		
		image.onload = function() {
			// Create base texture and rexture from the loaded image.
			var baseTexture = new PIXI.BaseTexture(image)
			var texture = new PIXI.Texture(baseTexture);
			
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
					// Get the current sprite in the sprite array and add event listener to that sprite.
					// Using bind to bind the array position data to the function, allows the population of the text box.
					var currLength = spriteArr.length - 1;
					spriteArr[currLength].on('mousedown', onClick.bind(currLength));
					spriteArr[currLength].on('touchstart', onClick.bind(currLength));
					
					function onClick()
					{
						var imgNum = this + 1;
						var txtBox = document.getElementById('picSelected');
						txtBox.innerHTML = "Selected: " + imgNum;
					}
					// Add sprite to the stage.
					stage.addChild(imgSprite);
				}
			}
			
			animate();
		};
		// Set image source location to the location passed into start().
		image.src = img;
	}
	
	function animate() {
		requestAnimationFrame(animate);
		
		_renderer.render(_stage);
	}
}

var Zegami = new Zegami();

