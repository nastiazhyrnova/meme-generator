import Generator from './components/Generator/Generator';
import Background from './components/UI/Background';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
	return (
		<>
			<Background />
			<GlobalStyle />
			<Generator />
		</>
	);
};

export default App;
