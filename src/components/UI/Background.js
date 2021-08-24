import React from 'react';

import styled from 'styled-components';

const BackgroundStyled = styled.div`
	height: 100%;
	background-size: cover;
	background-position: 50% 50%;
	width: 100vw;
	text-align: center;
	z-index: -100;
	position: fixed;
	top: 0;
	background-color: #f2f2f2;
`;

const Background = () => {
	return <BackgroundStyled />;
};

export default React.memo(Background);
