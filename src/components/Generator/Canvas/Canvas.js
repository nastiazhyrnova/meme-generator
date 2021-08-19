import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CanvasStyled = styled.canvas`
	border: 1px dashed var(--main-white-color);
`;

const Canvas = props => {
	const canvasRef = useRef();

	const { image, topText, topTextColor } = { ...props };

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		if (image) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(image, 0, 0);
			ctx.font = '60px Impact';
			ctx.shadowColor = 'black';
			ctx.shadowBlur = 7;
			ctx.lineWidth = 5;
			ctx.textAlign = 'center';
			ctx.strokeText(topText, canvas.width / 2, canvas.height / 2);
			ctx.shadowBlur = 0;
			ctx.fillStyle = topTextColor;
			ctx.textAlign = 'center';
			ctx.fillText(topText, canvas.width / 2, canvas.height / 2);
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}, [image, topText, topTextColor]);

	return <CanvasStyled height='400px' width='400px' ref={canvasRef} />;
};

export default Canvas;
