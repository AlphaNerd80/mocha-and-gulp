exports.rgbToHex = function(red, green, blue) {
	
	var redHex = red.toString(16);
	var greenHex = green.toString(16);
	var blueHex = blue.toString(16);

	return pad(redHex) + pad(greenHex) + pad(blueHex);

};


exports.hexToRgb = function(hex){

	var red = parseInt( hex.substr(0, 2), 16);
	var green = parseInt( hex.substr(2, 2), 16);
	var blue = parseInt( hex.substr(4, 2), 16);

	return [red, green, blue];
};


function pad(hex){
	return (hex.length === 1 ? "0" + hex : hex);
};