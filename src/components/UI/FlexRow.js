import styled from 'styled-components';

const FlexRowWrapper = styled.div`
	display: flex;
	gap: ${props => (props.gap ? props.gap : '2rem')};
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	height: ${props => (props.height ? props.height : 'auto')};
	width: 100%;
`;

const FlexRow = props => (
	<FlexRowWrapper {...props}>{props.children}</FlexRowWrapper>
);

export default FlexRow;
