import { Block } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';

export const MediaSlider: Block = {
	slug: 'media-slider',
	labels: {
		singular: 'Media Slider',
		plural: 'Media Slider Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'media',
			label: 'Media',
			type: 'array',
			minRows: 3,
			maxRows: 9,
			fields: [
				{
					name: 'media',
					label: 'Media',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
};
