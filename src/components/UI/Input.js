import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

import textChangeFieldsStyle from '../../styles/textChangeFieldsStyle';

const InputStyle = styled(DebounceInput)`
	${textChangeFieldsStyle};
	height: 100%;
	text-align: center;
	flex-grow: ${props => (props.flexgrow ? props.flexgrow : '')};
`;

const Input = props => {
	return <InputStyle {...props} debounceTimeout={400} />;
};

export default Input;
