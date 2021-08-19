import { useState } from 'react';

import ColorPicker from './ColorPicker';

const Color = props => {
	const [showColorPicker, setShowColorPicker] = useState(false);

	return (
		<>
			<button
				title='Text color'
				onClick={() => setShowColorPicker(!showColorPicker)}></button>
			{showColorPicker && ColorPicker}
		</>
	);
};

export default Color;
