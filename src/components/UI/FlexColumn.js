import styled from 'styled-components';

const FlexColumnWrapper = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
`;

const FlexColumn = props => {
	return <FlexColumnWrapper>{props.children}</FlexColumnWrapper>;
};

export default FlexColumn;
