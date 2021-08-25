import { useEffect } from 'react';

import Generator from './components/Generator/Generator';
import Background from './components/UI/Background';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
	//load fonts
	useEffect(() => {
		const myFont = new FontFace('myFont', 'url(../../assets/fonts/comic.ttf)');

		myFont
			.load()
			.then(function (font) {
				// with canvas, if this is ommited won't work
				document.fonts.add(font);

				console.log('Font loaded');
			})
			.then(() => {
				//canvas here
			});
	}, []);

	return (
		<>
			<GlobalStyle />
			<Background />
			<Generator />
		</>
	);
};

export default App;
