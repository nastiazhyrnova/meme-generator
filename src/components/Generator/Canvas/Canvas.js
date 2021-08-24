import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
	getMinImageSize,
	getOffsetCoordinates,
} from '../../../utilities/imageSize';
import {
	CHANGE_CANVAS_SIZE,
	SET_CANVAS_IMAGE,
	CLEAR_CANVAS_IMAGE,
} from '../../../store/actionTypes';

const CanvasStyled = styled.canvas`
	border: 1px dashed var(--main-white-color);
`;

const Canvas = props => {
	const dispatch = useDispatch();
	const canvasRef = useRef();

	const { image } = { ...props };

	const canvasSize = useSelector(state => state.canvasSize);
	const textStore = useSelector(state => state.text);

	const topText = textStore.top;
	const bottomText = textStore.bottom;

	//change canvas size on viewport change
	useEffect(() => {
		//TODO: add debounce
		const changeCanvasSize = () => {
			if (window.visualViewport.width <= 532) {
				dispatch({
					type: CHANGE_CANVAS_SIZE,
					size: Math.round(window.visualViewport.width - 32),
				});
			} else {
				dispatch({
					type: CHANGE_CANVAS_SIZE,
					size: 500,
				});
			}
		};
		window.addEventListener('resize', changeCanvasSize);
		changeCanvasSize();
		return () => {
			window.removeEventListener('resize', changeCanvasSize);
		};
	}, [dispatch]);

	//make changes on canvas
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		if (image) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			//resize image and add in the center of the canvas
			const [imgWidth, imgHeight] = getMinImageSize(
				image.width,
				image.height,
				canvasSize
			);
			const [x, y] = getOffsetCoordinates(imgWidth, imgHeight);
			ctx.drawImage(image, x, y, imgWidth, imgHeight);

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
			ctx.strokeText(bottomText.text, canvas.width / 2, canvas.height * 0.9);
			ctx.shadowBlur = 0;
			ctx.fillStyle = bottomText.color;
			ctx.textAlign = 'center';
			ctx.fillText(bottomText.text, canvas.width / 2, canvas.height * 0.9);

			//update state with edited image
			dispatch({
				type: SET_CANVAS_IMAGE,
				canvas: canvas.toDataURL('image/jpg'),
			});
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			dispatch({
				type: CLEAR_CANVAS_IMAGE,
			});
		}
	}, [image, topText, bottomText, canvasSize, dispatch]);

	return (
		<CanvasStyled
			width={`${canvasSize}px`}
			height={`${canvasSize}px`}
			ref={canvasRef}
		/>
	);
};

export default Canvas;
