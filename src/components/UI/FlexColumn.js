import styled from 'styled-components';

const FlexColumnWrapper = styled.div`
	display: flex;
	gap: ${props => (props.gap ? props.gap : '2rem')};
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
`;

const FlexColumn = props => {
	return <FlexColumnWrapper {...props}>{props.children}</FlexColumnWrapper>;
};

export default FlexColumn;
