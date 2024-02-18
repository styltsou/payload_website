import { Block } from 'payload/types';

import statistic, { Type as StatType } from '../../fields/statistic';

export const ImageStatCollage: Block = {
	slug: 'image-stat-collage',
	labels: {
		singular: 'Image Stat Collage',
		plural: 'Image Stat Collage Blocks',
	},
	fields: [
		{
			name: 'stats',
			label: 'Statistics',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [statistic()],
		},
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			minRows: 3,
			maxRows: 6,
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
