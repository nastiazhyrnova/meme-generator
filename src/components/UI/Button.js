import styled from 'styled-components';

const ButtonStyle = styled.button`
	padding: 1rem 2rem;
	background-color: ${props =>
		props.bgColor ? props.bgColor : 'var(--purple-color)'};
	outline: none;
	border: none;
	border-radius: 3rem;
	font-size: 1.2rem;
	color: ${props =>
		props.textColor ? props.textColor : 'var(--main-white-color)'};
	&:hover {
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		transform: scale(110%);
	}
`;

const Button = props => {
	return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};

export default Button;
