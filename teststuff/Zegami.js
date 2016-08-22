

function Zegami() {
	
	// this.stage;
	// this.renderer;
	// this.numImgX;
	// this.numImgY;
	// this.spriteArr = [];
	
	var _stage;
	var _renderer;
	var _numImgX;
	var _numImgY;
	var _spriteArr = [];
	
	// Pass in ID of the container element to attach the application to in the DOM.
	// Initialises the renderer and additional HTML elements and adds them to the page.
	this.attachTo = function(container) {
		// Initialise PIXI stage and renderer.
		// Attach renderer to the intended element.
		var canvas = document.getElementById(container);
		var wWidth = window.innerWidth;
		var wHeight = 850; 
		
		_renderer = PIXI.autoDetectRenderer(wWidth, wHeight, {backgroundColor : 0xFFFFFF});
		canvas.appendChild(_renderer.view);
		
		_stage = new PIXI.Container();
		_stage.x = 0;
		_stage.y = 0;
		
		// var stage = this.stage;
		// Create a container div to put the zoom control and selected element into.
		var containerDiv = document.createElement('div');
		// Create slider for zoom control and add event listener to change the Pixi stage's scale.
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
				_stage.scale.y = val;
			}
		);
		containerDiv.appendChild(zoomSlider);
		
		// Create the HTMl element to display the number of the currently selected image.
		var selectedSpan = document.createElement('span');
		selectedSpan.id = "picSelected";
		selectedSpan.innerHTML = "Selected: ";
		
		// Attach elemnts to their respective parents.
		containerDiv.appendChild(selectedSpan);
		canvas.appendChild(containerDiv);
		
		return this;
	}
	
	// Function to set size of the image grid.
	// Passing in how many images required on the X axis and on the Y axis.
	this.size = function(numX, numY) {
		_numImgX = numX;
		_numImgY = numY;
		
		return this;
	}
	
	// Start function.
	// Pass in image url and proceeds to load, render images in a grid and call animate on pixi renderer.
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
			
			// Call animate.
			animate();
		};
		// Set image source location to the location passed into start().
		image.src = img;
	}
	
	// Animate function.
	function animate() {
		requestAnimationFrame(animate);
		
		_renderer.render(_stage);
	}
}

Zegami.prototype = Zegami();
// Initialise Zegami Object.
var Zegami = new Zegami();

