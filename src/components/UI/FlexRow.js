import styled from 'styled-components';

const FlexRowWrapper = styled.div`
	display: flex;
	gap: ${props => (props.gap ? props.gap : '2rem')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: ${props => (props.height ? props.height : '100%')};
	width: 100%;
	margin: 0 auto;

	@media (max-width: 1024px) {
		flex-wrap: wrap;
		height: auto;
	}
`;

const FlexRow = props => (
	<FlexRowWrapper {...props}>{props.children}</FlexRowWrapper>
);

export default FlexRow;
