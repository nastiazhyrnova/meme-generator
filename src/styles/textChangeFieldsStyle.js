import { css } from 'styled-components';

const textChangeFieldsStyle = props => css`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border: 1px solid rgba(136, 69, 154, 0.5);
	border-radius: 0.5rem;
	outline: none;
	width: ${props => (props.width ? props.width : 'auto')};
	height: ${props => (props.height ? props.height : 'auto')};
	background-color: ${props =>
		props.bgColor ? props.bgColor : 'var(--main-white-color)'};
	color: ${props => props.color};
`;

export default textChangeFieldsStyle;
