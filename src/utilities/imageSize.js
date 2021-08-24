export const getMinImageSize = (width, height, max) => {
	if (width > height) {
		//if image is landscape
		if (height > max) {
			//if height (smaller side) is bigger that canvas size
			const newWidth = Math.round(width * (max / height));
			return [newWidth, max];
		} else {
			return [width, height];
		}
	} else if (height > width) {
		//if image is portrait orientation
		if (width > max) {
			//if width (smaller side) is bigger that canvas size
			const newHeight = Math.round(height * (max / width));
			return [max, newHeight];
		} else {
			return [width, height];
		}
	} else {
		//if image is square (resize or stretch to canvas)
		return [max, max];
	}
};

export const getOffsetCoordinates = (width, height, max) => {
	if (width > height) {
		//landscape
		return [-Math.round((width - height) / 2), 0];
	} else if (height > width) {
		//portrait
		return [0, -Math.round((height - width) / 2)];
	} else {
		//square
		return [0, 0];
	}
};
