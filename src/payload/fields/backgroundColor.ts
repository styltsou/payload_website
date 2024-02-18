import { Field } from 'payload/types';

import deepMerge from '../utilities/deepMerge';

export type BackgroundColorType = 'none' | 'red' | 'blue' | 'orange';

type BackgroundColorFactory = (options?: {
	colors?: BackgroundColorType[];
	overrides?: Record<string, unknown>;
}) => Field;

const colorOptions = {
	none: { label: 'None', value: 'none' },
	red: { label: 'Red', value: 'red' },
	blue: { label: 'Blue', value: 'blue' },
	orange: { label: 'Orange', value: 'orange' },
};

const backgroundColor: BackgroundColorFactory = ({ colors, overrides = {} } = {}) => {
	let backgroundColorResult: Field = {
		name: 'backgroundColor',
		type: 'radio',
		defaultValue: 'none',
		options: [],
	};

	let colorOptionsToUse = [
		colorOptions.none,
		colorOptions.red,
		colorOptions.blue,
		colorOptions.orange,
	];

	if (colors) {
		colorOptionsToUse = colors.map(color => colorOptions[color]);
	}

	backgroundColorResult = { ...backgroundColorResult, options: colorOptionsToUse };

	return deepMerge(backgroundColorResult, overrides);
};

export default backgroundColor;
