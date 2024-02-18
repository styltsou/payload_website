import { Block } from 'payload/types';

export const Spacer: Block = {
	slug: 'spacer',
	labels: {
		singular: 'Spacer',
		plural: 'Spacers',
	},
	fields: [
		{
			name: 'size',
			label: 'Size',
			type: 'radio',
			defaultValue: 'small',
			options: [
				{
					label: 'Small',
					value: 'small',
				},
				{
					label: 'Medium',
					value: 'medium',
				},
				{
					label: 'Large',
					value: 'large',
				},
			],
		},
	],
};
