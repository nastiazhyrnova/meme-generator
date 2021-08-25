import Generator from './components/Generator/Generator';
import Background from './components/UI/Background';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Background />
			<Generator />
		</>
	);
};

export default App;
