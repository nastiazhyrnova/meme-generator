import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CanvasStyled = styled.canvas`
	border: 1px dashed var(--main-white-color);
`;

const Canvas = props => {
	const [canvasSize, setCanvasSize] = useState(500);
	const canvasRef = useRef();
	const textStore = useSelector(state => state.text);

	const { image } = { ...props };
	const topText = textStore.top;
	const bottomText = textStore.bottom;

	//change canvas size on viewport change
	useEffect(() => {
		const changeCanvasSize = () => {
			if (window.visualViewport.width <= 532) {
				setCanvasSize(Math.round(window.visualViewport.width - 32));
			} else {
				setCanvasSize('500px');
			}
		};
		window.addEventListener('resize', changeCanvasSize);
		changeCanvasSize();
		return () => {
			window.removeEventListener('resize', changeCanvasSize);
		};
	}, []);

	//make changes on canvas
	useEffect(() => {
		const canvas = canvasRef.current;

		const ctx = canvas.getContext('2d');

		if (image) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			//add image
			ctx.drawImage(image, 0, 0);

			//add top text & stroke
			ctx.font = `${topText.fontSize} ${topText.font}`;
			ctx.shadowColor = 'black';
			ctx.shadowBlur = 7;
			ctx.lineWidth = 5;
			ctx.textAlign = 'center';
			ctx.strokeText(topText.text, canvas.width / 2, canvas.height * 0.2);
			ctx.shadowBlur = 0;
			ctx.fillStyle = topText.color;
			ctx.textAlign = 'center';
			ctx.fillText(topText.text, canvas.width / 2, canvas.height * 0.2);

			//add bottom text & stroke
			ctx.font = `${bottomText.fontSize} ${bottomText.font}`;
			ctx.shadowColor = 'black';
			ctx.shadowBlur = 7;
			ctx.lineWidth = 5;
			ctx.textAlign = 'center';
			ctx.strokeText(bottomText.text, canvas.width / 2, canvas.height * 0.8);
			ctx.shadowBlur = 0;
			ctx.fillStyle = bottomText.color;
			ctx.textAlign = 'center';
			ctx.fillText(bottomText.text, canvas.width / 2, canvas.height * 0.8);
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}, [image, topText, bottomText, canvasSize]);

	return (
		<CanvasStyled
			width={`${canvasSize}px`}
			height={`${canvasSize}px`}
			ref={canvasRef}
		/>
	);
};

export default Canvas;
