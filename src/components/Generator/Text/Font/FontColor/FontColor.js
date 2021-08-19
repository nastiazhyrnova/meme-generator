import { useState } from 'react';

import ColorPicker from './ColorPicker';

const Color = props => {
	const [showColorPicker, setShowColorPicker] = useState(false);

	return (
		<>
			<button
				title='Text color'
				onClick={() => setShowColorPicker(!showColorPicker)}>
				Color
			</button>
			{showColorPicker && (
				<ColorPicker
					textlocation={props.textlocation}
					showColorPicker={showColorPicker}
					closeColorPicker={() => setShowColorPicker(false)}
				/>
			)}
		</>
	);
};

export default Color;
