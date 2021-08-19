import React from 'react';

import styled from 'styled-components';
import bg from '../../assets/bg.png';

const BackgroundStyled = styled.div`
	height: 100vh;
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
