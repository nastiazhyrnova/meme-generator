import styled from 'styled-components';

const FlexRowWrapper = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

const FlexRow = props => {
	return <FlexRowWrapper>{props.children}</FlexRowWrapper>;
};

export default FlexRow;
