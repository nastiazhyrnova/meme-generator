import styled from 'styled-components';

const PickerPopUp = styled.div`
	position: absolute;
`;

const PickerBackground = styled.div`
	background-color: transparent;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`;

const ColorPicker = props => {
	return (
		<>
			{props.showPicker && (
				<PickerPopUp>
					<PickerBackground onClick={props.toggleColorPicker} />
					{/* <SketchPicker
          color={color}
          onChangeComplete={color =>
            dispatch(changeColor('top', color.hex))
          }
        /> */}
				</PickerPopUp>
			)}
		</>
	);
};

export default ColorPicker;
