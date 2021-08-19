import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

const InputStyle = styled(DebounceInput)`
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	height: 100%;
	border: none;
	border-radius: 3rem;
	outline: none;
	text-align: center;
	background-color: var(--main-white-color);
	color: ${props => props.color};
	width: ${props => (props.width ? props.width : 'auto')};
	height: ${props => (props.height ? props.height : 'auto')};
`;

const Input = props => {
	return <InputStyle {...props} debounceTimeout={400} />;
};

export default Input;
