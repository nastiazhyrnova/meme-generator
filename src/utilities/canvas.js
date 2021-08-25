export const writeCanvasText = (
	textlocation,
	canvasContext,
	textObject,
	canvasWidth,
	canvasHeight
) => {
	canvasContext.font = `${textObject.fontSize} ${textObject.font}`;
	canvasContext.shadowColor = 'black';
	canvasContext.shadowBlur = 0;
	canvasContext.lineWidth = 5;
	canvasContext.textAlign = 'center';
	canvasContext.strokeText(
		textObject.text,
		canvasWidth / 2,
		canvasHeight * `${textlocation === 'top' ? '0.2' : '0.9'}`
	);
	canvasContext.shadowBlur = 0;
	canvasContext.fillStyle = textObject.color;
	canvasContext.textAlign = 'center';
	canvasContext.fillText(
		textObject.text,
		canvasWidth / 2,
		canvasHeight * `${textlocation === 'top' ? '0.2' : '0.9'}`
	);
};
