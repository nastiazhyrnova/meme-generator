import styled from 'styled-components';

import textChangeFieldsStyle from '../../styles/textChangeFieldsStyle';

const SelectStyled = styled.div`
	position: relative;
	flex-grow: 0;
	height: 100%;
	& select {
		${textChangeFieldsStyle};
		height: 100%;
		appearance: none;
		padding-right: 2.5rem;
	}

	& .custom-arrow {
		display: block;
		background-color: transparent;
		height: 100%;
		width: 2.5rem;
		position: absolute;
		top: 0;
		right: 0;
		pointer-events: none;

		&::before,
		&::after {
			--size: 0.3rem;
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-left: var(--size) solid transparent;
			border-right: var(--size) solid transparent;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		&::before {
			border-bottom: var(--size) solid var(--purple-color);
			top: 40%;
		}
		&::after {
			border-top: var(--size) solid var(--purple-color);
			top: 60%;
		}
	}
`;

const Select = props => (
	<SelectStyled {...props}>
		<select>{props.children}</select>
		<span className='custom-arrow'></span>
	</SelectStyled>
);

export default Select;
