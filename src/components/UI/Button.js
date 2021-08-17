import styled from 'styled-components';

const ButtonStyled = styled.button`
	padding: 1rem 2rem;
	background-color: var(--main-white-color);
	outline: none;
	border: none;
	border-radius: 3rem;
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
		transform: scale(110%);
	}
`;

const Button = props => {
	return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;
