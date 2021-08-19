import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';

import { CHANGE_COLOR } from '../../../../../store/actionTypes';

const PickerPopUp = styled.div`
	position: absolute;
	z-index: 200;
`;

const PickerBackground = styled.div`
	background-color: transparent;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`;

const ColorPicker = props => {
	const textStore = useSelector(state => state.text);
	const dispatch = useDispatch();

	const changeColor = color =>
		dispatch({
			type: CHANGE_COLOR,
			textlocation: props.textlocation,
			color,
		});

	console.log();
	return (
		<>
			{props.showColorPicker && (
				<>
					<PickerBackground onClick={props.closeColorPicker} />
					<PickerPopUp>
						<HexColorPicker
							color={textStore[props.textlocation].color}
							onChange={color => changeColor(color)}
						/>
					</PickerPopUp>
				</>
			)}
		</>
	);
};

export default ColorPicker;
