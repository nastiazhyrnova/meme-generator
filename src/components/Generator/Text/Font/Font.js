import Select from 'react-select';
import styled from 'styled-components';

const SelectStyled = styled(Select)`
	display: inline-block;
	width: 100%;
`;

const Font = props => {
	const options = [
		{ value: 'Arial', label: 'Arial' },
		{ value: 'Comic Sans', label: 'Comic Sans' },
		{ value: 'Pacifico', label: 'Pacifico' },
	];

	return <SelectStyled options={options} />;
};

export default Font;
