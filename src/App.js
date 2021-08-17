import styled from 'styled-components';

import Generator from './components/Generator/Generator';
import GlobalStyle from './styles/GlobalStyle';
import bg from './assets/bg.png';

const Background = styled.div`
	background-image: url(${bg});
	height: 100vh;
	background-size: cover;
	background-position: 50% 50%;
	width: 100vw;
	text-align: center;
`;

const App = () => {
	return (
		<Background>
			<GlobalStyle />
			<Generator />
		</Background>
	);
};

export default App;
