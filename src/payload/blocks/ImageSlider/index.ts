import { Block } from 'payload/types';

import backgroundColor, { BackgroundColorType } from '../../fields/backgroundColor';

export const ImageSlider: Block = {
	slug: 'image-slider',
	labels: {
		singular: 'Image Slider',
		plural: 'Image Slider Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			minRows: 3,
			maxRows: 9,
			fields: [
				{
					name: 'image',
					label: 'Image',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
};
